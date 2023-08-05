import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Navegation.css";

function Navegation({ selected, changeSelected, hideMenu, handleHideMenu  }) {
  const [showEx, changeShowEx] = useState(false);

  return (
    <nav className={ `navBar ${hideMenu && "hidden"}` }>
      <div>
        <button
          className={ `hamburger-menu ${hideMenu && "hidden"}` }
          onClick={ () => handleHideMenu(!hideMenu) }>☰</button>
        <ul className={ `nav-bar-list first-items ${hideMenu && "hidden"}` }>
          <div className={`${selected === 1 ? "selected" : "notSelected"}`}>
            <li>
              <Link
                className="Link"
                onClick={ () => changeSelected(1) }
                to="/projects">Projetos</Link>
            </li>
          </div>
            <div className={`${selected === 2 ? "selected" : "notSelected"}`}>
            <li>
              <Link
                className="Link"
                onClick={ () => changeSelected(2) }
                to="/about">Sobre</Link>
            </li>
          </div>
          <div className={`${selected === 3 ? "selected" : "notSelected"}`}>
            <li>
              <Link
                className="Link"
                onClick={ () => changeSelected(3) }
                to="/skills">Skills</Link>
            </li>
          </div>
        </ul>
      </div>
      <div className={`pagesExemple ${hideMenu && "hidden"}`}>
        <button onClick={() => changeShowEx(!showEx)}>
          <p
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
          <ul className={ `nav-bar-list ${showEx ? "open" : "close"} second-items` }>
            <li>
              <Link
                onClick={ () => changeSelected(4) }
                to="/exemples/login" className={
                  `Link ${selected === 4 ? "selected" : "notSelected"}`
              }>
                Login
              </Link>
            </li>
            <li>
              <Link
                onClick={ () => changeSelected(5) }
                to="/exemples/register" className={
                  `Link ${selected === 5 ? "selected" : "notSelected"}`
              }>
                Cadastro
              </Link>
            </li>
            <li>
              <Link
                onClick={ () => changeSelected(6) }
                to="/exemples/products"
                className={
                  `Link ${selected === 6 ? "selected" : "notSelected"}`
                  }
                >
                Venda de Produtos
              </Link>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default Navegation;
