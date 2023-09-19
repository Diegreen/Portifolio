import { useContext, useEffect, useState } from "react";
import styles from "./../chatbox.module.scss";
import stylesStuding from "./studing.module.scss";
import { TypeAnimation } from "react-type-animation";
import { PaginationContext } from "../../context/PaginationContext";

export const StudingView = () => {
  const { updateActualPage } = useContext(PaginationContext);

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
          speed={50}
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
          speed={70}
          style={{ display: "inline-block" }}
          repeat={0}
          className={styles.TypeText}
        />
        {isDone && (
          <>
            <div className={stylesStuding.cursos}>
              <h2>Kenzie Academy</h2>
              <p>Curso intensivo com foco em FullStack e duração de 12 meses</p>
              <p>Inicio: 05/05/2023 - Término: 05/05/2024</p>
            </div>
            <div>
              <h2>Cod3r</h2>
              <p>Curso de Web Moderno com JavaScript</p>
              <p>Inicio 23/12/2022 - Termino: 15/05/2023</p>
            </div>
            <div>
              <h2>RocketSeat</h2>
              <p>Trilha Discovery com foco em FullStack</p>
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
