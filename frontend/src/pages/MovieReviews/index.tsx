import './styles.css';
import { useState, useEffect } from 'react';
import { requestBackend, hasAnyRoles } from 'utils/requests';
import { AxiosRequestConfig } from 'axios';
import { Review } from 'types/review';
import { useParams } from 'react-router-dom';
import ReviewListCard from 'components/ReviewListCard';
import ReviewSubmit from 'components/ReviewSubmit';

type UrlParams = {
  movieId: string;
};

const MovieReviews = () => {
  const { movieId } = useParams<UrlParams>();

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  const handleOnInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <>
      <h1>Tela detalhes do filme id: {movieId}</h1>
      {hasAnyRoles(['ROLE_MEMBER']) && (
        <div className="form-review-container">
          <ReviewSubmit
            movieId={movieId}
            onInsertReview={handleOnInsertReview}
          />
        </div>
      )}
      {reviews && <ReviewListCard reviews={reviews} />}
    </>
  );
};

export default MovieReviews;
