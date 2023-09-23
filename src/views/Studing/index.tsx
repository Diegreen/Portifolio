import { useContext, useEffect, useState } from "react";
import styles from "./../chatbox.module.scss";
import stylesStuding from "./studing.module.scss";
import { TypeAnimation } from "react-type-animation";
import { PaginationContext } from "../../context/PaginationContext";

export const StudingView = () => {
  const { 
    updateActualPage,
    typeTextTime,
    typeTitleTime 
  } = useContext(PaginationContext);

  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDone(true);
    }, 16000);
  }, []);

  return (
    <>
      <div className={`${styles.ChatBox} ${stylesStuding.ChatBox}`}>
        <TypeAnimation
          sequence={["Estudos:"]}
          wrapper="h1"
          speed={typeTitleTime}
          style={{ display: "inline-block" }}
          omitDeletionAnimation
          repeat={0}
          className={styles.TypeTitle}
        />
        <TypeAnimation
          sequence={[
            3000,
            "Atualmente eu estou cursando a Kenzie Academy, em um curso com foco em FullStack.",
            3000,
            "Já fiz cursos na udemy e também na RocketSeat, deixarei os listados a baixo",
            3000,
            "Cursos e especializações abaixo:",
            1500,
          ]}
          wrapper="p"
          omitDeletionAnimation
          speed={typeTextTime}
          style={{ display: "inline-block" }}
          repeat={0}
          className={styles.TypeText}
        />
        {isDone && (
          <>
            <div className={stylesStuding.KenzieAcademy}>
              <h2>Kenzie <span>Academy</span></h2>
              <p>Curso intensivo com foco em FullStack e duração de 12 meses</p>
              <p>Inicio: 05/05/2023 - Término: 05/05/2024</p>
              <a href="https://kenzie.com.br/" target="_blank">Veja <span>mais</span></a>
            </div>
            <div className={stylesStuding.Coder}>
              <h2>COD<span>3</span>R</h2>
              <p>Curso de Web Moderno com JavaScript</p>
              <p>Inicio 23/12/2022 - Termino: 15/05/2023</p>
              <a href="https://www.cod3r.com.br/courses/web-moderno" target="_blank">Veja <span>mais</span></a>
            </div>
            <div className={stylesStuding.rocketseat}>
              <h2>rocketseat</h2>
              <p>Trilha Discover com foco em FullStack</p>
              <a href="https://www.rocketseat.com.br/discover" target="_blank">Veja <span>mais</span></a>
            </div>
            <button onClick={() => updateActualPage('Experiencia')}>
              Ir para: Experiências
            </button>
          </>
        )}
      </div>
    </>
  );
};
