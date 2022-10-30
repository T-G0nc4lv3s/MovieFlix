import './styles.css';
import { useForm } from 'react-hook-form';
import { requestBackendLogin } from 'utils/requests';


type FormData = {
  username: string;
  password: string;
}

const LoginCard = () => {

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
    .then(response => {
      console.log('Sucesso ', response); 
    })
    .catch(error => {
      console.log('Erro ' + error);
    });
  }

  return (
    <div className="login-card-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          <label htmlFor="">LOGIN</label>
          <input
            {...register('username')}
            type="text"
            name="username"
            id="ctrl-email"
            placeholder="Email"
          />
          <input
            {...register('password')}
            type="password"
            name="password"
            id="ctrl-password"
            placeholder="Senha"
          />
          <input
            type="submit"
            value="FAZER LOGIN"
            className="btn btn-primary btn-login"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
