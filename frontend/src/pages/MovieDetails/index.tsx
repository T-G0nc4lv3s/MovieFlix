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
import { Movie } from 'types/movie';
import MovieDetailsCard from 'components/MovieDetailsCard';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [movie, setMovie] = useState<Movie>();

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
      });
  }, [movieId]);

  useEffect(() => {
    getMovie(movieId);
  }, [movieId]);

  const getMovie = (movieId: string) => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
    };

    setIsLoading(true);
    requestBackend(params)
      .then((response) => {
        console.log(response.data);
        setMovie(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleOnInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <div className="movie-details-card">
      <div className="card-header-container">
        {movie && <MovieDetailsCard movie={movie} />}
      </div>
      {hasAnyRoles(['ROLE_MEMBER']) && (
        <div className="form-review-container">
          <ReviewSubmit
            movieId={movieId}
            onInsertReview={handleOnInsertReview}
          />
        </div>
      )}
      {isLoading ? <ReviewLoader /> : <ReviewListCard reviews={reviews} />}
    </div>
  );
};

export default MovieDetails;
