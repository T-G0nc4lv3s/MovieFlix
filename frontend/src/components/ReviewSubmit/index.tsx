import './styles.css';
import { useForm } from 'react-hook-form';

type FormData = {
    text : string
}

const ReviewSubmit = () => {


  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    console.log(formData);
  }

  return (
    <div className="review-submit-card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-review-container">
          <div className="input-review-container">
            <input
            {...register('text')}
              type="text"
              id="ctrl-review"
              placeholder="Deixe sua avaliação aqui"
              name="text"
            />
          </div>
          <div className="input-btn-container">
            <input
              type="submit"
              id="ctrl-submit"
              value="SALVAR AVALIAÇÃO"
              className="btn btn-primary btn-submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewSubmit;
