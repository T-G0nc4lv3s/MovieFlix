import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { useState, useEffect } from 'react';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from './../../utils/requests';
import MovieCard from 'components/MovieCard';
import { Link } from 'react-router-dom';
import ThreeDotsLoader from 'pages/MovieCatalog/ThreeDotsLoader';
import Pagination from 'components/Pagination';

const MovieList = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    getMovies(0);
  }, []);

  const getMovies = (pageNumber: number) => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: pageNumber,
        size: 4,
      },
    };

    setIsLoading(true);
    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="movie-list-container">
      <h1>Tela listagem de filmes</h1>
      <div className="row grid-container">
        {isLoading ? (
          <div>
            <ThreeDotsLoader />
          </div>
        ) : (
          page?.content.map((movie) => (
            <div className="movie-link col-sm-6 col-xl-3" key={movie.id}>
              <Link to={`movies/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            </div>
          ))
        )}
      </div>
      <div className="catalog-pagination-container">
        <Pagination
          pageCount={page ? page.totalPages : 0}
          range={3}
          onChange={getMovies}
        />
      </div>
    </div>
  );
};

export default MovieList;
