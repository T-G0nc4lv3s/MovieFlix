import './styles.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { requestBackendLogin, saveAuthData, getAuthData } from 'utils/requests';

type FormData = {
  username: string;
  password: string;
};

const LoginCard = () => {
  const [hasError, setHasError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        setHasError(false);
        saveAuthData(response.data);
        const token = getAuthData().access_token;
        console.log("Token gerado " + token);
        console.log('Sucesso ', response);
      })
      .catch((error) => {
        setHasError(true);
        console.log('Erro ' + error);
      });
  };

  return (
    <div className="login-card-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          <label htmlFor="">LOGIN</label>
          {hasError && (
            <div className="alert alert-danger">
              Erro ao tentar efetuar login
            </div>
          )}
          <input
            {...register('username', {
              required: 'Campo requerido',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido',
              },
            })}
            type="text"
            name="username"
            id="ctrl-email"
            placeholder="Email"
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback d-block">
            {errors.username?.message}
          </div>
          <input
            {...register('password', {
              required: 'Campo requerido',
            })}
            type="password"
            name="password"
            id="ctrl-password"
            placeholder="Senha"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback d-block">
            {errors.password?.message}
          </div>
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
