import { Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import MovieList from 'pages/MovieList';
import MovieReviews from 'pages/MovieReviews';
import history from 'utils/history';
import PrivateRoute from 'components/PrivateRoute';

const Routes = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute exact path="/movies">
          <MovieList />
        </PrivateRoute>
        <PrivateRoute exact path="/movies/:movieId">
          <MovieReviews />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default Routes;
