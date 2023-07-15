import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navegation.css";

function Navegation() {
  const [showEx, changeShowEx] = useState(false);

  return (
    <nav className="navBar">
      <ul>
        <li>
          <Link to="/projects">Projetos</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/skills">Habilidades</Link>
        </li>
      </ul>
      <div className="pagesExemple">
        <button onClick={ () => changeShowEx(!showEx) }>
          { showEx ? "⇩" : "⇨" }Paginas Exemplo
        </button>
        { showEx && (
          <ul>
            <li>
              <Link to="/exemples/login">Login</Link>
            </li>
            <li>
              <Link to="/exemples/register">Cadastro</Link>
            </li>
            <li>
              <Link to="/exemples/products">Venda de Produtos</Link>
            </li>
          </ul>
        ) }
      </div>
    </nav>
  );
}

export default Navegation;
