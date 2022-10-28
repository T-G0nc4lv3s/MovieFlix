import './styles.css';
import ReviewSubmit from 'components/ReviewSubmit';
import MovieListCard from 'components/MovieListCard';

const MovieReviews = () => {
  return (
    <div className="movie-reviews-card">
      <div className="card-header-container">
        <h1>Tela detalhes do filme id: 1</h1>
      </div>
      <div className="form-review-container">
        <ReviewSubmit />        
      </div>
      <div className="review-list-container">
        <MovieListCard />
      </div>
    </div>
  );
};

export default MovieReviews;
