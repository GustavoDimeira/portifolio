import { useState } from "react";
import "../css/About.css";
import face from "../images/face.png";

function About() {
  const [paragraph_1, hide_1] = useState(true);
  const [paragraph_2, hide_2] = useState(true);

  return (
    <div className="about">
      <div className="top-section">
        <div className="main-text">
          <h3>
            Quem sou:
          </h3>
          <p>
            Me chamo gustavo, tenho 20 anos, e recentemente terminei o curso de desenvolvimento web full stack pela <a href="https://www.betrybe.com/" target="blank">Trybe</a>.
          </p>
          <p>
            Tenho principal interesse no front-end, e agora pretendo programar sites no geral como free-lancer.
          </p>
        </div>
        <img src={ face } alt="face-img" className="face"/>
      </div>
      <div className="second-text">
        <button className="show_more" onClick={ () => {
            if (!paragraph_1) { hide_2(true) }
            hide_1(!paragraph_1);
          }}
        >
          <h3>
            Porque Desenvolvimento Web?
          </h3>
          <p className={ `arrow ${!paragraph_1 ? "rotated" : "flat"}` }> ➤ </p>
        </button>
        <p className={ `text first-paragraph ${paragraph_1 && "hidden"}`}>
          Estou cursando faculdade de engenharia de controle e automação(mecatrônica) e no segundo semestre da faculdade, tive a disciplina de programação, estava muito empolgado, pois é um topico que sempre tive interesse, mas acabei não gostando da metodologia do professor e não fui capas de aprender nada do que gostaria/esperava. Decidi então que precisava correr atras e começar a estudar programação por conta própria, (pois também teria programação 2 alguns semestres pela frente). Após procurar por algum tempo, encontrei a Trybe, uma escola de programação e desenvolvimento web full stack. Decidi cursar ambos simultaneamente e terminei a formação da Trybe em maio deste ano.
        </p>
        <button
          className={ `${paragraph_1 && "hidden"} show_more` }
          onClick={ () => hide_2(!paragraph_2) }
        >
          Mostrar mais
          <p className={ `arrow ${!paragraph_2 ? "rotated" : "flat"}` }> ➤ </p>
        </button>
        <p className={ `text second-paragraph ${paragraph_2 && "hidden"}`}>
          Inicialmente, minha intenção era aprimorar meus conhecimentos em programação para destacar-me na área de engenharia. No entanto, acabei me apaixonando ainda mais pela programação, pois aqui posso ver minhas ideias ganharem vida e tenho mais liberdade para explorar o que quero. Atualmente, meu objetivo é seguir na área de desenvolvimento web, trabalhando como freelancer para adquirir experiência na área, até que termine a faculdade.
        </p>
      </div>
    </div>
  );
}

export default About;
