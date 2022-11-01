import './styles.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { BASE_URL } from 'utils/requests';
import { SpringPage } from 'types/vendor/spring';

const MovieList = () => {


  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {

    const params : AxiosRequestConfig = {
        method: 'GET',
        url: `${BASE_URL}/movies`,
        params: {
            genreId: 0,
        }
    }
    axios(params)
    .then(response => {
        setPage(response.data);
        console.log(page);  
    })
  }, [])

  return (
    <div className="movie-list-container">
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
