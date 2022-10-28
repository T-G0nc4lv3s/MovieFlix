import './styles.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-primary main-nav">
      <div className="logo-container">
        <Link to="/movies">MovieFlix</Link>
      </div>
      <div className="btn-container">
        <button className="btn btn-primary btn-exit">SAIR</button>
      </div>
    </nav>
  );
};

export default Navbar;
