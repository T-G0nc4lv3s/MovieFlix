import './styles.css';
import Star from 'assets/images/star.svg';

const MovieListCard = () => {
  return (
    <div className="list-card-container container-fluid">
      <div className="username-container">
        <img src={Star} alt="ícone" />
        <p>Maria Silva</p>
      </div>
      <div className="review-text-container">
        <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco</p>
      </div>
      <div className="username-container">
        <img src={Star} alt="ícone" />
        <p>Maria Silva</p>
      </div>
      <div className="review-text-container">
        <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco</p>
      </div>
      <div className="username-container">
        <img src={Star} alt="ícone" />
        <p>Maria Silva</p>
      </div>
      <div className="review-text-container">
        <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco</p>
      </div>
    </div>
  );
};

export default MovieListCard;
