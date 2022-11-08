import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import MovieCatalog from 'pages/MovieCatalog';
import MovieReviews from 'pages/MovieReviews';
import history from 'utils/history';
import PrivateRoute from 'components/PrivateRoute';
import { isAuthenticated } from 'utils/requests';

const Routes = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          {isAuthenticated() ? <Redirect to="/movies" /> : <Home />}
        </Route>
        <PrivateRoute exact path="/movies">
          <MovieCatalog />
        </PrivateRoute>
        <PrivateRoute exact path="/movies/:movieId">
          <MovieReviews />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default Routes;
