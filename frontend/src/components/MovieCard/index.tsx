import './styles.css';
import { Movie } from 'types/movie';
import ImgMovie from 'assets/images/img-catalog.png';

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="movie-card-container">
      <div className="movie-card-image-container">
        <img src={movie.imgUrl} alt="imagem" />
      </div>
      <div className="movie-card-bottom-container">
        <span className="card-title">{movie.title}</span>
        <span className="card-year">{movie.year}</span>
        <span className="card-subtitle">{movie.subTitle}</span>
      </div>
    </div>
  );
};

export default MovieCard;
