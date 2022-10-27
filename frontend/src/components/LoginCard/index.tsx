import './styles.css';

const LoginCard = () => {
  return (
    <div className="login-card-container">
      <form>
        <div className="form-container">
          <label htmlFor="">LOGIN</label>
          <input type="text" id="ctrl-email" placeholder="Email" />
          <input type="text" id="ctrl-password" placeholder="Senha" />
          <input type="submit" value="FAZER LOGIN" className="btn btn-primary btn-login" />
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
