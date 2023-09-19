import { useContext, useEffect, useState } from 'react';
import styles from './../chatbox.module.scss'
import { TypeAnimation } from 'react-type-animation';
import { PaginationContext } from '../../context/PaginationContext';

export const AboutView = () => {
  const {
    updateActualPage
  } = useContext(PaginationContext)

  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsDone(true)
    }, 16000)
  }, [])

  return (
    <>
      <div className={styles.ChatBox}>
        <TypeAnimation
          sequence={[
            'Sou esforçado.',
          ]}
          wrapper="h1"
          speed={50}
          style={{  display: 'inline-block' }}
          omitDeletionAnimation
          repeat={0}
          className={styles.TypeTitle}
        />
        <TypeAnimation
          sequence={[
            2000,
            'Comecei meus estudos com Front-end em outubro de 2022, estava em busca de uma carreira e então descobri a carreira de dev por uns amigos.',
            3000,
            'Por ter hábito de ficar no computador, me apaixonei por esta profissão e hoje busco me ingressar no mercado de trabalho',
            1000
          ]}
          wrapper="p"
          omitDeletionAnimation
          speed={70}
          style={{ display: 'inline-block' }}
          repeat={0}
          className={styles.TypeText}
        />
        {isDone &&
          <button onClick={() => updateActualPage('Stacks')}>Ir para: Stacks </button>
        }
      </div>
    </>
  )
}