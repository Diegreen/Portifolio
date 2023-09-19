import { useEffect, useState } from 'react';
import styles from './../chatbox.module.scss'
import { TypeAnimation } from 'react-type-animation';

export const ExperienceView = () => {
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsDone(true)
    }, 31000)
  }, [])

  return (
    <>
      <div className={styles.ChatBox}>
        <TypeAnimation
          sequence={[
            'Experiência',
          ]}
          wrapper="h1"
          speed={50}
          style={{ display: 'inline-block' }}
          omitDeletionAnimation
          repeat={0}
          className={styles.TypeTitle}
        />
        <TypeAnimation
          sequence={[
            2000,
            'Atualmente não tenho experiência em trabalho na area de Desenvolvimento Web',
            4000,
            'Mas estou trabalhando, estudando e me esforçando muito e tenho certeza que com a determinação que tenho irei subir de nivel.',
            2000
          ]}
          wrapper="p"
          omitDeletionAnimation
          speed={70}
          style={{ display: 'inline-block' }}
          repeat={0}
          className={styles.TypeText}
        />
        <TypeAnimation
          sequence={[
            15000,
            'Sei que conseguirei alcançar meus objetivos e minhas metas',
            2000,
            'Atualmente trabalho de Auxiliar Administrativo na prefeitura de Itatiaia',
            2000,
          ]}
          wrapper="p"
          omitDeletionAnimation
          speed={70}
          style={{ display: 'inline-block' }}
          repeat={0}
          className={styles.TypeText}
        />
         <TypeAnimation
          sequence={[
            25000,
            'Mas com muito estudo e dedicação não tem como dar errado',
            2000,
            'Estudar e ter perseverança é a chave',
            2000,
          ]}
          wrapper="p"
          omitDeletionAnimation
          speed={70}
          style={{ display: 'inline-block' }}
          repeat={0}
          className={styles.TypeText}
        />
        {isDone &&
          <TypeAnimation
            sequence={[
              'No cabeçalho você encontra os botões para entrar em contato com meu Linkedin e visitar meu Github'
            ]}
            wrapper="p"
            omitDeletionAnimation
            speed={70}
            style={{ display: 'inline-block' }}
            repeat={0}
            className={styles.TypeText}
          />
        }
      </div>
    </>
  )
}