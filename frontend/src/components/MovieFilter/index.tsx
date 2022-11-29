import './styles.css';
import Select from 'react-select';

const MovieFilter = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <div className="movie-filter-container">
      <form action="">
        <div>
          <Select 
          options={options} 
          classNamePrefix="movie-catalog-select" />
        </div>
      </form>
    </div>
  );
};

export default MovieFilter;
