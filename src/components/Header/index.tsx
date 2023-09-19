import { useContext, useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { PaginationContext } from '../../context/PaginationContext'
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

export const Header = () => {
  const {
    updateActualPage,
    actualPage,
    canViewExperience
  } = useContext(PaginationContext)

  const [experienceIsLocked, setExperienceIsLocked] = useState(false)

  useEffect(() => {
    if (!experienceIsLocked) return

    resetExperienceIsLocked
  }, [])

  const resetExperienceIsLocked = setTimeout(() => {
    setExperienceIsLocked(false)
  }, 6000)

  return (
    <header className={styles.Header}>
      <h2 onClick={() => updateActualPage('Home')}>
        Diego Almeida
        <span>Front-End</span>
      </h2>
      <nav>
        <button 
          onClick={() => updateActualPage('Sobre')}
          className={actualPage === 'Sobre' ? styles.Active : ''}
        >
            Sobre
        </button>
        <button 
          onClick={() => updateActualPage('Stacks')}
          className={actualPage === 'Stacks' ? styles.Active : ''}
        >
            Stacks
        </button>
        <button 
          onClick={() => updateActualPage('Estudos')}
          className={actualPage === 'Estudos' ? styles.Active : ''}
        >
            Estudos
        </button>
        <button 
          onClick={canViewExperience 
            ? () => updateActualPage('Experiencia')
            : () => setExperienceIsLocked(true)
          }
          className={`
            ${actualPage === 'Experiencia' && canViewExperience  
              ? styles.Active 
            : ''}
            ${!canViewExperience ? styles.Locked  : ''}
        `}
        >
          Experiencia
        </button>
        {experienceIsLocked ?
          <p className={styles.LockedPopup}>
            Por Favor, Veja um pouco do meu portifólio primeiro!
          </p>
        : null}
      </nav>
      <div className={styles.ContactSection}>
        <a target='_blank' href='https://www.linkedin.com/in/diego-magalh%C3%A3es-11a97323a/' className={styles.Contact}>
            LinkedIn <IoLogoLinkedin />
        </a>
        <a target='_blank' href='https://github.com/Diegreen' className={styles.Github}>
          Github <IoLogoGithub/>
        </a>
      </div>
    </header>
  )
}