import './styles.css';
import { Link } from 'react-router-dom';
import { TokenData } from 'utils/requests';
import { useState, useEffect } from 'react';
import { isAuthenticated, getTokenData, removeAuthData } from 'utils/requests';
import history from 'utils/history';

type AuthData = {
  authenticated: boolean;
  tokenData?: TokenData;
};

const Navbar = () => {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthData({
        authenticated: false,
      });
    }
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {

    event.preventDefault();
    removeAuthData();
    setAuthData({
      authenticated: false,
    });
    history.replace('/');
  }

  return (
    <nav className="navbar bg-primary main-nav">
      <div className="logo-container">
        <Link to="/movies">MovieFlix</Link>
      </div>
      {authData.authenticated ? (
        <div className="btn-container">
          <button className="btn btn-primary btn-exit" onClick={handleClick}>SAIR</button>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
