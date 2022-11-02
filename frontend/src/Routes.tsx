import { Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import MovieList from 'pages/MovieList';
import MovieReviews from 'pages/MovieReviews';
import history from 'utils/history';

const Routes = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movies">
          <MovieList />
        </Route>
        <Route exact path="/movies/:movieId">
          <MovieReviews />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
