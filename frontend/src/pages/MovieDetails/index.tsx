import './styles.css';
import { useState, useEffect } from 'react';
import { requestBackend } from 'utils/requests';
import { hasAnyRoles } from 'utils/auth';
import { AxiosRequestConfig } from 'axios';
import { Review } from 'types/review';
import { useParams } from 'react-router-dom';
import ReviewListCard from 'components/ReviewListCard';
import ReviewSubmit from 'components/ReviewSubmit';
import ReviewLoader from './ReviewLoader';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {

  const { movieId } = useParams<UrlParams>();

  const [isLoading, setIsLoading] = useState(false);

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    setIsLoading(true);
    requestBackend(params)
    .then((response) => {
      setReviews(response.data);
    })
    .finally(() => {
      setIsLoading(false);
    })
  }, [movieId]);

  const handleOnInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <div className="movie-details-card">
      <div className="card-header-container">
        <h1>Tela detalhes do filme id: {movieId}</h1>
      </div>
      {hasAnyRoles(['ROLE_MEMBER']) && (
        <div className="form-review-container">
          <ReviewSubmit
            movieId={movieId}
            onInsertReview={handleOnInsertReview}
          />
        </div>
      )}
      {isLoading ? <ReviewLoader /> :  <ReviewListCard reviews={reviews} />}
    </div>
  );
};

export default MovieDetails;
