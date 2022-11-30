import './styles.css';
import { useForm } from 'react-hook-form';
import { requestBackend } from 'utils/requests';
import { AxiosRequestConfig } from 'axios';
import { Review } from 'types/review';
import { toast } from 'react-toastify';

type FormData = {
  text: string;
};

type Props = {
  movieId: string;
  onInsertReview: (review: Review) => void;
};

const ReviewSubmit = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    const params: AxiosRequestConfig = {
      method: 'post',
      url: '/reviews',
      withCredentials: true,
      data: {
        text: formData.text,
        movieId: movieId,
      },
    };

    requestBackend(params).then((response) => {
      toast.info('Avaliação enviada com sucesso');
      onInsertReview(response.data);
    })
    .catch(() => {
      toast.error('Erro ao enviar avaliação');
    });
    setValue('text', '');
    console.log(formData);
  };

  return (
    <div className="review-submit-card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-review-container">
          <div className="input-review-container">
            <input
              {...register('text', {
                required: 'Campo obrigatório',
              })}
              type="text"
              id="ctrl-review"
              placeholder="Deixe sua avaliação aqui"
              name="text"
            />
          </div>
          <div className="invalid-feedback d-block">
            {errors?.text?.message}
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
