import styled from "styled-components";
import { endpoints, HAS_KEY } from "../api/tmdb";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import SetupGuide from "../components/SetupGuide";
import MovieCard from "../components/MovieCard";

const Grid = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
`;

export default function PopularList() {
  const { data, loading, error } = useFetch(endpoints.popular(), { skip: !HAS_KEY });

  if (!HAS_KEY) return <SetupGuide />;
  if (loading) return <Loader label="Loading movies…" />;
  if (error)
    return (
      <main className="container">
        <p>Error: {error.message}</p>
      </main>
    );

  const movies = data?.results ?? [];

  return (
    <main className="container">
      <h1>Discover Movies</h1>
      <Grid>
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </Grid>
    </main>
  );
}
