import { useContext, useEffect, useState } from 'react';
import styles from './../chatbox.module.scss'
import { TypeAnimation } from 'react-type-animation';
import { PaginationContext } from '../../context/PaginationContext';

export const HomeView = () => {
  const {  
    updateActualPage
  } = useContext(PaginationContext)

  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsDone(true)
    }, 10000)
  }, [])

  return (
    <>
      <div className={styles.ChatBox}>
        <TypeAnimation
          sequence={[
            'Olá, Meu nome é Diego Almeida',
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
            'Sou desenvolvedor Front-end, estou em busca da minha primeira oportunidade.',
            2000,
            'Deseja conhecer mais sobre mim?'
          ]}
          wrapper="p"
          omitDeletionAnimation
          speed={70}
          style={{ fontSize: '1em', display: 'inline-block' }}
          repeat={0}
        />
        {isDone &&
          <button onClick={() => updateActualPage('Sobre')}>Ir para: Sobre </button>
        }
      </div>
    </>
  )
}