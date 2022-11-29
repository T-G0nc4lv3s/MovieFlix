import './styles.css';
import Select from 'react-select';
import { useState, useEffect } from 'react';
import { Genre } from 'types/genre';
import { requestBackend } from 'utils/requests';
import { AxiosRequestConfig } from 'axios';

const MovieFilter = () => {
  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = () => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/genres',
      withCredentials: true,
    };
    requestBackend(params).then((response) => {
      console.log(response.data);
      setSelectGenres(response.data);
    });
  };

  return (
    <div className="movie-filter-container">
      <form action="">
        <div>
          <Select
            options={selectGenres}
            classNamePrefix="movie-catalog-select"
            getOptionLabel={(genre: Genre) => genre.name}
            getOptionValue={(genre: Genre) => String(genre.id)}
          />
        </div>
      </form>
    </div>
  );
};

export default MovieFilter;
