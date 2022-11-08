import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { useState, useEffect } from 'react';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from './../../utils/requests';
import MovieCard from 'components/MovieCard';
import { Link } from 'react-router-dom';

const MovieList = () => {
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
    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div className="movie-list-container">
      <h1>Tela listagem de filmes</h1>
      {page?.content.map((movie) => {
        return (
          <div className="movie-link" key={movie.id}>
            <Link to={`movies/${movie.id}`}> 
              <MovieCard movie={movie} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
