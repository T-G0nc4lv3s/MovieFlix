import './styles.css';


const Navbar = () => {
  return (
    <nav className="navbar bg-primary main-nav">
      <div className="logo-container">
        <a href="#Link">MovieFlix</a>
      </div>
      <div className="btn-container">
        <button className="btn btn-primary btn-exit">SAIR</button>
      </div>
    </nav>
  );
};

export default Navbar;
