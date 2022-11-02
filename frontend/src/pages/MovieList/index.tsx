import './styles.css';
import { useState, useEffect } from 'react';
import { AxiosRequestConfig } from 'axios';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { requestBackend } from 'utils/requests';
import { SpringPage } from 'types/vendor/spring';
import { isAuthenticated} from 'utils/requests';

const MovieList = () => {

  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {

    const params : AxiosRequestConfig = {
        method: 'GET',
        url: '/movies',
        withCredentials: true,
        params: {
            genreId: 0,
        }
    }
    requestBackend(params)
    .then(response => {
        setPage(response.data);
        console.log(page);  
    })
  }, [])

  return (
    <div className="movie-list-container">
      <h1>{isAuthenticated() ? 'autenticado' : 'não autenticado'}</h1>
      <h1>Tela listagem de filmes</h1>
      <div>
        {page?.content.map(movie => {

            return (
                <span className="movie-link" key={movie.id}>
                    <Link to="/movies/:movieId">Acessar /movies/{movie.id}</Link>
                </span>
            );
        })}
      </div>
    </div>
  );
};

export default MovieList;
