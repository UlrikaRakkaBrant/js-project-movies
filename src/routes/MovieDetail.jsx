import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { endpoints, IMG } from "../api/tmdb";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";

const Wrapper = styled.main`
  .backdrop {
    width: 100%;
    height: 350px;
    object-fit: cover;
    filter: brightness(0.6);
  }

  .details {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: -80px;
    background: rgba(17, 24, 39, 0.8);
    backdrop-filter: blur(6px);
    border-radius: 1rem;
    padding: 1rem;

    @media (min-width: 768px) {
      grid-template-columns: 220px 1fr;
      padding: 1.5rem;
    }
  }

  .poster {
    width: 100%;
    height: auto;          /* ignore any HTML height attribute */
    aspect-ratio: 2 / 3;   /* movie poster ratio */
    object-fit: cover;     /* fill the box without distortion */
    border-radius: 0.75rem;
    display: block;
  }


  .meta {
    color: var(--muted);
    font-size: 0.9rem;
  }

  a {
    color: var(--accent);
  }
`;

export default function MovieDetail() {
  const { id } = useParams();
  const { data: movie, loading, error } = useFetch(endpoints.movie(id), { skip: !id });

  if (!id) return <NotFound message="Missing movie ID." />;
  if (loading) return <Loader label="Loading movie…" />;
  if (error?.status === 404) return <NotFound message="Unknown movie ID." />;
  if (error) return <main className="container"><p>Error: {error.message}</p></main>;
  if (!movie) return <Loader label="Loading…" />;

  const poster = IMG.poster(movie.poster_path, "w500");
  const backdrop = IMG.backdrop(movie.backdrop_path, "w780");
  const year = movie.release_date ? new Date(movie.release_date).getFullYear() : "";

  return (
    <Wrapper>
      {backdrop && (
        <img src={backdrop} alt={`${movie.title} backdrop`} className="backdrop" />
      )}

      <div className="container details">
        {poster && (
          <img
            src={poster}
            alt={`${movie.title} poster`}
            className="poster"
            width="500"
            height="750"
          />
        )}
        <div>
          <p>
            <Link to="/">← Back</Link>
          </p>
          <h1>
            {movie.title} {year && <span style={{ color: "var(--muted)" }}>({year})</span>}
          </h1>
          <p style={{ fontStyle: "italic", color: "var(--muted)" }}>{movie.tagline}</p>
          <p>{movie.overview}</p>
          <div className="meta">
            <p>
              <strong>Rating:</strong> {movie.vote_average?.toFixed?.(1)} / 10 (
              {movie.vote_count} votes)
            </p>
            {movie.genres?.length > 0 && (
              <p>
                <strong>Genres:</strong>{" "}
                {movie.genres.map((g) => g.name).join(", ")}
              </p>
            )}
            {movie.production_companies?.length > 0 && (
              <p>
                <strong>Companies:</strong>{" "}
                {movie.production_companies.map((c) => c.name).join(", ")}
              </p>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
