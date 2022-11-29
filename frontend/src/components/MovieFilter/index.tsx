import './styles.css';
import Select from 'react-select';
import { useState, useEffect } from 'react';
import { Genre } from 'types/genre';
import { requestBackend } from 'utils/requests';
import { AxiosRequestConfig } from 'axios';
import { useForm, Controller } from 'react-hook-form';

type MovieFilterData = {
  genre: Genre;
};

const MovieFilter = () => {
  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

  const { setValue, getValues, control } = useForm<MovieFilterData>();

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
      setSelectGenres(response.data);
    });
  };

  const handleChangeGenre = (value: Genre) => {
    setValue('genre', value);

    const obj: MovieFilterData = {
      genre: getValues('genre'),
    };

    console.log('Enviou ', obj);
  };

  return (
    <div className="movie-filter-container">
      <form onSubmit={() => {}}>
        <div className="movie-filter-genre-container">
          <Controller
            name="genre"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={selectGenres}
                isClearable
                classNamePrefix="movie-catalog-select"
                placeholder="Gênero"
                onChange={(value) => handleChangeGenre(value as Genre)}
                getOptionLabel={(genre: Genre) => genre.name}
                getOptionValue={(genre: Genre) => String(genre.id)}
              />
            )}
          />
        </div>
      </form>
    </div>
  );
};

export default MovieFilter;
