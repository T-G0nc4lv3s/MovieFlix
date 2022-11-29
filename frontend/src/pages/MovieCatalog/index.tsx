import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from './../../utils/requests';
import MovieCard from 'components/MovieCard';
import { Link } from 'react-router-dom';
import ThreeDotsLoader from 'pages/MovieCatalog/ThreeDotsLoader';
import Pagination from 'components/Pagination';
import MovieFilter from 'components/MovieFilter';

type ControlComponentsData = {
  activePage: number;
};

const MovieCatalog = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState<SpringPage<Movie>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
    });

  const getMovies = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
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
  }, [controlComponentsData]);

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({ activePage: pageNumber });
  };

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className="movie-list-container">
      <MovieFilter />
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
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default MovieCatalog;
