import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Navegation.css";

function Navegation({ selected, changeSelected  }) {
  const [showEx, changeShowEx] = useState(false);

  return (
    <nav className={ `navBar` }>
      <ul className="nav-bar-list first-items">
        <div className={ selected === 1 ? "selected" : ( selected <= 3 ? "notSelected" : "blackText") }>
          <div className="border-rounded">.</div>
          <li>
            <Link
              className="Link"
              onClick={ () => changeSelected(1) }
              to="/projects">Projetos</Link>
          </li>
        </div>
        <div className={ selected === 2 ? "selected" : ( selected <= 3 ? "notSelected" : "blackText") }>
          <div className="border-rounded">.</div>
          <li>
            <Link
              className="Link"
              onClick={ () => changeSelected(2) }
              to="/about">Sobre</Link>
          </li>
        </div>
        <div className={ selected === 3 ? "selected" : ( selected <= 3 ? "notSelected" : "blackText") }>
          <div className="border-rounded">.</div>
          <li>
            <Link
              className="Link"
              onClick={ () => changeSelected(3) }
              to="/skills">Skills</Link>
          </li>
        </div>
      </ul>
      <div className={`pagesExemple`}>
        <button onClick={() => changeShowEx(!showEx)}>
          <p className={ `${showEx ? "open" : "close"}` }
            style={{
              display: "inline-block",
              transform: `rotate(${showEx ? "90deg" : "0deg"})`,
              transition: "transform 0.3s ease",
            }}
          >
            ➤
          </p>
          Paginas Exemplo
        </button>
          <ul className="nav-bar-list">
            <li>
              <Link
                onClick={ () => changeSelected(4) }
                to="/exemples/login" className={
                `Link ${selected === 4 ? "selected" : ( selected <= 3 ? "notSelected" : "blackText")}`
              }>
                Login
              </Link>
            </li>
            <li>
              <Link
                onClick={ () => changeSelected(5) }
                to="/exemples/register" className={
                `Link ${selected === 5 ? "selected" : ( selected <= 3 ? "notSelected" : "blackText")}`
              }>
                Cadastro
              </Link>
            </li>
            <li>
              <Link
                onClick={ () => changeSelected(6) }
                to="/exemples/products" className={
                `Link ${selected === 6 ? "selected" : ( selected <= 3 ? "notSelected" : "blackText")}`
              }>
                Venda de Produtos
              </Link>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default Navegation;
