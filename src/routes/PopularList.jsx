import styled from "styled-components";
import { useMemo, useState } from "react";
import { endpoints, HAS_KEY } from "../api/tmdb";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import SetupGuide from "../components/SetupGuide";
import MovieCard from "../components/MovieCard";
import CategoryPicker from "../components/CategoryPicker";

const Grid = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
`;

export default function PopularList() {
  const [cat, setCat] = useState("popular");

  // Build URL from selected category (and page 1 for now)
  const url = useMemo(() => {
    const fn = endpoints[cat] ?? endpoints.popular;
    return fn(1);
  }, [cat]);

  // Always call the hook; skip network if no key
  const { data, loading, error } = useFetch(url, { skip: !HAS_KEY });

  if (!HAS_KEY) return <SetupGuide />;
  if (loading) return <Loader label="Loading movies…" />;
  if (error) {
    return (
      <main className="container">
        <p>Error: {error.message}</p>
      </main>
    );
  }

  const movies = data?.results ?? [];

  return (
    <main className="container">
      <h1>Discover Movies</h1>
      <CategoryPicker value={cat} onChange={setCat} />
      <Grid>
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </Grid>
    </main>
  );
}
