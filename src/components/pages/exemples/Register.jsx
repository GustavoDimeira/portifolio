import { useState } from "react";

import "./css/Register.css";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export default function Register() {
  const [crrStep, changeStep] = useState(1);

  const [Nome, changeNome] = useState("");
  const [Sobrenome, changeSobrenome] = useState("");
  const [Apelido, changeApelido] = useState("");
  const [NomeErro, changeNomeError] = useState(false);
  const [SobrenomeErro, changeSobrenomeError] = useState(false);
  const [ApelidoErro, changeApelidoError] = useState(false);

  const [Instagram, changeInstagram] = useState("");
  const [Facebook, changeFacebook] = useState("");
  const [Twiter, changeTwiter] = useState("");

  const [Email, changeEmail] = useState("");
  const [Senha, changeSenha] = useState("");
  const [Senha2, changeSenha2] = useState("");
  const [EmailErro, changeEmailError] = useState(false);
  const [SenhaErro, changeSenhaError] = useState(false);
  const [Senha2Erro, changeSenha2Error] = useState(false);

  const firstValidation = () => {
    const NomeErro = (Nome.length < 3 || Nome.length > 15);
    const SobrenomeErro = (Sobrenome.length < 3 || Sobrenome.length > 15);
    const ApelidoErro = (Apelido.length < 3 || Sobrenome.length > 15);

    changeNomeError(NomeErro); changeSobrenomeError(SobrenomeErro); changeApelidoError(ApelidoErro);

    if (!(NomeErro || SobrenomeErro || ApelidoErro)) changeStep(2);
  }

  const secondValidation = () => {
    const EmailErro = !emailRegex.test(Email);
    const SenhaErro = !passwordRegex.test(Senha);
    const Senha2Erro = Senha !== Senha2;

    changeEmailError(EmailErro); changeSenhaError(SenhaErro); changeSenha2Error(Senha2Erro);

    if (!(EmailErro || SenhaErro || Senha2Erro)) finish();
  }

  const finish = () => {
    console.log("a");
  }

  return (
    <div className="registerPage">
      <div className="steps">
        <form className={`setp-1 ${crrStep !== 1 && 'inVisible'}`}>
          <h3>Informações pessoais</h3>
          <div className="inputs">
            <div className="nome">
              <label>
                <p>Nome:</p>
                <input
                  type="text" placeholder="insira seu nome" value={Nome}
                  onChange={({ target }) => changeNome(target.value)}
                  onKeyDown={() => changeNomeError(false)}
                />
              </label>
              <span className="errorMsg">
                {NomeErro && "Nome deve ter entre 3-15 caracteries"}
              </span>
            </div>
            <div className="sobrenome">
              <label>
                <p>Sobrenome:</p>
                <input
                  type="text" placeholder="insira seu sobrenome" value={Sobrenome}
                  onChange={({ target }) => changeSobrenome(target.value)}
                  onKeyDown={() => changeSobrenomeError(false)}
                />
              </label>
              <span className="errorMsg">
                {SobrenomeErro && "Sobrenome deve ter entre 3-15 caracteries"}
              </span>
            </div>
            <div className="apelido">
              <label>
                <p>Apelido:</p>
                <input
                  type="text" placeholder="como quer ser chamado" value={Apelido}
                  onChange={({ target }) => changeApelido(target.value)}
                  onKeyDown={() => changeApelidoError(false)}
                />
              </label>
              <span className="errorMsg">
                {ApelidoErro && "Apelido deve ter entre 3-15 caracteries"}
              </span>
            </div>
          </div>
          <div className="btn-change-step">
            <button type="button" className="deActive"> Anterior </button>
            <button type="button" className="btn-next"
            onClick={firstValidation}> Proximo </button>
          </div>
        </form>
        <form className={`setp-2 ${crrStep !== 2 && 'inVisible'}`}>
          <h3>Redes sociais (opicional)</h3>
          <div className="inputs">
            <label>
              <p>Instagram:</p>
              <input
                type="text" value={Instagram}
                onChange={({ target }) => changeInstagram(target.value)}
              />
            </label>
            <label>
              <p>Facebook:</p>
              <input
                type="text" value={Facebook}
                onChange={({ target }) => changeFacebook(target.value)}
              />
            </label>
            <label>
              <p>Twiter:</p>
              <input
                type="text" value={Twiter}
                onChange={({ target }) => changeTwiter(target.value)}
              />
            </label>
          </div>
          <div className="btn-change-step">
            <button type="button" className="btn-prev" onClick={() => changeStep(1)}> Anterior </button>
            <button type="button" className="btn-next" onClick={() => changeStep(3)}> Proximo </button>
          </div>
        </form>
        <form className={`setp-3 ${crrStep !== 3 && 'inVisible'}`}>
          <h3>Cadastro</h3>
          <div className="inputs">
            <div className="emial">
              <label>
                <p>Email:</p>
                <input
                  type="email" placeholder="insira seu email" value={Email}
                  onChange={({ target }) => changeEmail(target.value)}
                  onKeyDown={() => changeEmailError(false)}
                  autoComplete="username"
                />
              </label>
              <span className="errorMsg">
                {EmailErro && "Email incorreto"}
              </span>
            </div>
            <div className="senha">
              <label>
                <p>Senha:</p>
                <input
                  type="password" placeholder="insira sua senha" value={Senha}
                  onChange={({ target }) => changeSenha(target.value)}
                  onKeyDown={() => changeSenhaError(false)}
                  autoComplete="new-password"
                />
              </label>
              <span className="errorMsg">
                {SenhaErro && "Senha deve possuir no minimo 8 caracteries, incluindo um caracterie especial, um numero e uma letra maiuscula e minuscula"}
              </span>
            </div>
            <div>
              <label>
                <p>Confirmar:</p>
                <input
                  type="password" placeholder="confirme sua senha" value={Senha2}
                  onChange={({ target }) => changeSenha2(target.value)}
                  onKeyDown={() => changeSenha2Error(false)}
                  autoComplete="new-password"
                />
              </label>
              <span className="errorMsg">
                {Senha2Erro && "Senhas estão diferentes"}
              </span>
            </div>
          </div>
          <div className="btn-change-step">
            <button type="button" className="btn-prev" onClick={() => changeStep(2)}> Anterior </button>
            <button type="button" className="btn-finish" onClick={secondValidation}> Finalizar </button>
          </div>
        </form>
      </div>
    </div>
  )
};
