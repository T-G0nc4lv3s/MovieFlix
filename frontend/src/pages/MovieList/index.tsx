import './styles.css';
import { Link } from 'react-router-dom';

const MovieList = () => {

    return (
        <div className="movie-list-container">
            <h1>Tela listagem de filmes</h1>
            <span>
                <Link to="/movies/:movieId">Acessar /movies/1</Link>
            </span>
            <span>
                <Link to="/movies/:movieId">Acessar /movies/2</Link>
            </span>
        </div>
        
    );
}

export default MovieList;