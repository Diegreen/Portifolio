import { useContext } from 'react'
import styles from './styles.module.scss'
import { PaginationContext } from '../../context/PaginationContext'

export const Header = () => {
  const {
    updateActualPage
  } = useContext(PaginationContext)

  return (
    <header className={styles.Header}>
      <h2 onClick={() => updateActualPage('Home')}>Diego Almeida</h2>
      <nav>
        <button onClick={() => updateActualPage('Sobre')}>Sobre</button>
        <button onClick={() => updateActualPage('Stacks')}>Stacks</button>
        <button onClick={() => updateActualPage('Estudos')}>Estudos</button>
        <button onClick={() => updateActualPage('Experiencia')}>Experiencia</button>
        <a href='' className={styles.Contact}>Contato</a>
      </nav>
    </header>
  )
}