import { endpoints, HAS_KEY } from "../api/tmdb";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import SetupGuide from "../components/SetupGuide";
import { Link } from "react-router-dom";

export default function PopularList() {
  // Always call hooks. Skip network if no key.
  const { data, loading, error } = useFetch(endpoints.popular(), { skip: !HAS_KEY });

  if (!HAS_KEY) return <SetupGuide />;
  if (loading) return <Loader label="Loading movies" />;
  if (error) return <main className="container"><p>Error: {error.message}</p></main>;

  const movies = data?.results ?? [];
  return (
    <main className="container">
      <h1>Discover Movies</h1>
      <ul>
        {movies.map(m => (
          <li key={m.id}>
            <Link to={`/movies/${m.id}`}>{m.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
