import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { useState, useEffect } from 'react';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from './../../utils/requests';
import MovieCard from 'components/MovieCard';
import { Link } from 'react-router-dom';
import ThreeDotsLoader from 'pages/MovieCatalog/ThreeDotsLoader';

const MovieList = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState<SpringPage<Movie>>();

  const params: AxiosRequestConfig = {
    method: 'GET',
    url: '/movies',
    withCredentials: true,
    params: {
      genreId: 0,
    },
  };

  useEffect(() => {
    setIsLoading(true);
    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="movie-list-container">
      <h1>Tela listagem de filmes</h1>
      {isLoading ? (
        <div>
          <ThreeDotsLoader />
        </div>
      ) : (
        page?.content.map((movie) => (
          <div className="movie-link" key={movie.id}>
            <Link to={`movies/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieList;
