import './styles.css';
import { useForm } from 'react-hook-form';


type FormData = {
  username: string;
  password: string;
}

const LoginCard = () => {

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    console.log(formData);
    
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
            type="text"
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
