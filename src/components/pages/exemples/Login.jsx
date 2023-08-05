import { useState } from "react";
import genericLogo from "../../images/genericLogo.png";
import "./css/Login.css";

function Login() {
  const [showPassword, changeVisibilit] = useState(false);

  return (
    <div className="login-page">
      <form className="loginFomr">
        <img src={genericLogo} alt="logo" height={150} width={150} />
        <input
          type="email" className="text" placeholder="email"
          autoComplete="username"
        />
        <div className="password-label">
          <input
            type={ showPassword ? "text" : "password" } className="text" placeholder="senha"
            autoComplete="new-password"
          />
          <input
            className="show-password" type="checkbox" onChange={() => changeVisibilit(!showPassword)}
          />
        </div>
        <button className="login-btn"type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
