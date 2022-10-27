import './styles.css';
import Banner from 'assets/images/main.png';
import LoginCard from 'components/LoginCard';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="banner-container">
          <div className="header-container">
            <h1>Avalie Filmes</h1>
          </div>
          <div className="paragraph-container">
            <p>Diga o que você achou do seu filme favorito</p>
          </div>
          <div className="img-container">
            <img src={Banner} alt="Imagem banner" />
          </div>
        </div>
        <div className="card-container">
          <LoginCard />
        </div>
      </div>
    </>
  );
};

export default Home;
