import './assets/styles/custom.scss';
import Navbar from './components/Navbar/index';
import MovieList from 'pages/MovieList';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <MovieList />
    </>
  );
}

export default App;
