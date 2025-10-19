import styled from "styled-components";
import { Link } from "react-router-dom";
import { IMG } from "../api/tmdb";

const Card = styled.article`
  background: var(--card);
  border-radius: 0.75rem;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
  }
`;

const Poster = styled.img`
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
`;

const Body = styled.div`
  padding: 0.75rem;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1rem;
  line-height: 1.3;
`;

const Year = styled.p`
  margin: 0.25rem 0 0;
  color: var(--muted);
  font-size: 0.875rem;
`;

export default function MovieCard({ movie }) {
  const poster = IMG.poster(movie.poster_path, "w342");
  const year = movie.release_date ? new Date(movie.release_date).getFullYear() : "—";

  return (
    <Card>
      <Link to={`/movies/${movie.id}`} aria-label={`Open details for ${movie.title}`}>
        {poster && (
          <Poster
            src={poster}
            alt={`${movie.title} poster`}
            width="342"
            height="513"
            loading="lazy"
          />
        )}
        <Body>
          <Title>{movie.title}</Title>
          <Year>{year}</Year>
        </Body>
      </Link>
    </Card>
  );
}
