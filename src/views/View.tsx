
import { useContext, useEffect, useState } from 'react'
import { HomeView } from './Home'
import styles from './styles.module.scss'
import { PaginationContext } from '../context/PaginationContext'
import { AboutView } from './About'
import { StacksView } from './Stacks'

export const ViewManager = () => {
  const {
    actualPage
  } = useContext(PaginationContext)

  const [backgroundClass, setBackgroundClass] = useState(styles.Home)

  useEffect(() => {
    switch(actualPage) {
      case 'Home':
        setBackgroundClass(styles.Home);
        return;
      case 'Sobre':
        setBackgroundClass(styles.Sobre);
        return;
      case 'Stacks':
        setBackgroundClass(styles.Stacks);
        return;
      case 'Estudos':
        setBackgroundClass(styles.Estudos);
        return;
      case 'Experiencia':
        setBackgroundClass(styles.Experiencia);
        return;
    }
  }, [actualPage])

  return (
    <main className={backgroundClass}>
      <section className={styles.Content}>
        {actualPage === 'Home' && <HomeView />}
        {actualPage === 'Sobre' && <AboutView />}
        {actualPage === 'Stacks' && <StacksView />}
        {actualPage === 'Estudos' && <></>}
        {actualPage === 'Experiencia' && <></>}
      </section>
    </main>
  )
}