import './styles.css';
import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { isAuthenticated, getTokenData, removeAuthData } from 'utils/requests';
import { AuthContext } from '../../AuthContext';
import history from 'utils/history';

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="navbar bg-primary main-nav">
      <div className="logo-container">
        <Link to="/movies">MovieFlix</Link>
      </div>
      {authContextData.authenticated ? (
        <div className="btn-container">
          <button className="btn btn-primary btn-exit" onClick={handleClick}>
            SAIR
          </button>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
