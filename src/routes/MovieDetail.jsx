import { useParams, Link } from "react-router-dom";
import { endpoints } from "../api/tmdb";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";

export default function MovieDetail() {
  const { id } = useParams();

  // If there's no id in the URL, don't try to fetch.
  const url = id ? endpoints.movie(id) : null;
  const { data, loading, error } = useFetch(url, { skip: !id });

  if (!id) return <NotFound message="Missing movie ID." />;

  if (loading) return <Loader label="Loading movie…" />;

  if (error?.status === 404) return <NotFound message="Unknown movie ID." />;
  if (error) {
    return (
      <main className="container">
        <p>Error: {error.message}</p>
      </main>
    );
  }

  // Extra guard: if API returned nothing but no error (rare).
  if (!data) {
    return (
      <main className="container">
        <p>Could not load this movie.</p>
        <p><Link to="/">← Back</Link></p>
      </main>
    );
  }

  const movie = data;

  return (
    <main className="container">
      <p><Link to="/">← Back</Link></p>
      <h1>{movie.title ?? "Untitled"}</h1>
      <p>{movie.overview || "No overview available."}</p>
    </main>
  );
}
