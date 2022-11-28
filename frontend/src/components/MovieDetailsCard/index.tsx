import './styles.css';
import { Movie } from 'types/movie';
import ImgMovie from 'assets/images/img-catalog.png';

type Props = {
  movie: Movie;
};

const MovieDetailsCard = ({ movie }: Props) => {
  return (
    <div className="movie-details-card-container">
      <div className="movie-details-image-container">
        <img src={movie.imgUrl} alt="imagem" />
      </div>
      <div>
        <div className="movie-details-middle-container">
          <span className="movie-details-title">{movie.title}</span>
          <span className="movie-details-year">{movie.year}</span>
          <span className="movie-details-subtitle">{movie.subTitle}</span>
        </div>
        <div className="movie-details-bottom-container">
          <p>{movie.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsCard;
