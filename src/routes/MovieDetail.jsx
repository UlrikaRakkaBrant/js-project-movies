import { useParams, Link } from "react-router-dom";
import { endpoints } from "../api/tmdb";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";

export default function MovieDetail() {
  const { id } = useParams();
  const { data: movie, loading, error } = useFetch(endpoints.movie(id));

  if (loading) return <Loader label="Loading movie" />;
  if (error?.status === 404) return <NotFound message="Unknown movie ID." />;
  if (error) return <main className="container"><p>Error: {error.message}</p></main>;

  return (
    <main className="container">
      <p><Link to="/">← Back</Link></p>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </main>
  );
}
