import './styles.css';
import { Movie } from 'types/movie';

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="movie-card-container d-flex">
      <span>Acessar /movies/{movie.id}</span>
    </div>
  );
};

export default MovieCard;
