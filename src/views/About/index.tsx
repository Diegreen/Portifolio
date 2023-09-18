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
    }, 20000)
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
          style={{ fontSize: '2em', display: 'inline-block' }}
          omitDeletionAnimation
          repeat={0}
        />
        <TypeAnimation
          sequence={[
            2000,
            'Comecei meus estudos com Front-end em outubro de 2022, estava em busca de uma carreira e então descobri a carreira de dev por uns amigos.',
            4000,
            'Por ter hábito de ficar no computador, me apaixonei por esta profissão e hoje busco me ingressar no mercado de trabalho',
            2000
          ]}
          wrapper="p"
          omitDeletionAnimation
          speed={70}
          style={{ fontSize: '1em', display: 'inline-block' }}
          repeat={0}
        />
        {isDone &&
          <button onClick={() => updateActualPage('Stacks')}>Ir para: Stacks </button>
        }
      </div>
    </>
  )
}