import './styles.css';
import ReviewSubmit from 'components/ReviewSubmit';
import ReviewListCard from 'components/ReviewListCard';
import { hasAnyRoles } from 'utils/requests';

const MovieReviews = () => {
  return (
    <div className="movie-reviews-card">
      <div className="card-header-container">
        <h1>Tela detalhes do filme id: 1</h1>
      </div>
      {hasAnyRoles(['ROLE_MEMBER']) && (
        <div className="form-review-container">
          <ReviewSubmit />
        </div>
      )}
      <div className="review-list-container">
        <ReviewListCard />
      </div>
    </div>
  );
};

export default MovieReviews;
