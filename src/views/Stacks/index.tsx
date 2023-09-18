import { useContext, useEffect, useState } from 'react';
import styles from './../chatbox.module.scss'
import techStyles from './stacks.module.scss'
import { TypeAnimation } from 'react-type-animation';
import { PaginationContext } from '../../context/PaginationContext';

type Sequence = Array<SequenceElement>;
type SequenceElement = string | number | ((element: HTMLElement | null) => void | Promise<void>);

type StacksLabelsType = {
  section: string;
  texts: Sequence
}

const StacksLabels: StacksLabelsType[] = [
  {
    section: 'html',
    texts: [
      'Html blablabla',
      2000,
      'blablabla',
      2000,
      'fodase piru'
    ]
  },
  {
    section: 'css',
    texts: [
      'css blablabla',
      2000,
    ]
  },
  {
    section: 'javascript',
    texts: [
      'javascript blablabla',
      2000,
    ]
  },
  {
    section: 'jquery',
    texts: [
      'jquery blablabla',
      2000,
    ]
  },
  {
    section: 'sass',
    texts: [
      'sass blablabla',
      2000,
    ]
  },
  {
    section: 'typescript',
    texts: [
      'typescript blablabla',
      2000,
    ]
  },
  {
    section: 'reactjs',
    texts: [
      'reactjs blablabla',
      2000,
    ]
  },
  {
    section: 'nextjs',
    texts: [
      'nextjs blablabla',
      2000,
    ]
  }
]

export const StacksView = () => {
  const {  
    updateActualPage
  } = useContext(PaginationContext)

  const [stackShow, setStackShow] = useState('')
  const [stackVisits, setStackVisits] = useState(0)

  useEffect(() => {
    setStackVisits(stackVisits + 1)
  }, [stackShow])

  return (
    <>
      <div className={styles.ChatBox}>
        <TypeAnimation
          sequence={[
            'Minhas Stacks:',
          ]}
          wrapper="h1"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          omitDeletionAnimation
          repeat={0}
        />
        <TypeAnimation
          sequence={[
            'Venho aprimorando meu conhecimento diariamente com cursos, projetos pessoais no Github e meetings com amigos desenvolvedores experientes.',
            2000,
            'Tente passar o mouse em cima de cada tecnologia para entender meu nível de conhecimento em cada uma delas. (Veja pelo menos 5 para ir ao próximo passo)',
            4000,
          ]}
          wrapper="p"
          omitDeletionAnimation
          speed={70}
          style={{ fontSize: '1em', display: 'inline-block' }}
          repeat={Infinity}
        />
        {stackVisits > 5 && 
          <button onClick={() => updateActualPage('Estudos')}>Ir para: Estudos </button>
        }
      </div>
      <div className={techStyles.Content}>
        <ExplainStacksTexts stackLabel={stackShow} />
        <img 
          onMouseEnter={() => {
            setStackShow('html')
          }} 
          src="/icons/html.svg" 
          alt="HTML" 
          className={stackShow === 'html' ? techStyles.Active : ''}
        />
        <img 
          onMouseEnter={() => {
            setStackShow('css')
          }} 
          src="/icons/css.svg" 
          alt="" 
          className={stackShow === 'css' ? techStyles.Active : ''}
        />
        <img 
          onMouseEnter={() => {
            setStackShow('javascript')
          }} 
          src="/icons/javascript.svg" 
          alt="" 
          className={stackShow === 'javascript' ? techStyles.Active : ''}
        />
        <img 
          onMouseEnter={() => {
            setStackShow('jquery')
          }} 
          src="/icons/jquery.svg" 
          alt="" 
          className={stackShow === 'jquery' ? techStyles.Active : ''}
        />
        <img 
          onMouseEnter={() => {
            setStackShow('sass')
          }} 
          src="/icons/sass.svg" 
          alt="" 
          className={stackShow === 'sass' ? techStyles.Active : ''}
        />
        <img 
          onMouseEnter={() => {
            setStackShow('typescript')
          }} 
          src="/icons/typescript.svg" 
          alt="" 
          className={stackShow === 'typescript' ? techStyles.Active : ''}
        />
        <img 
          onMouseEnter={() => {
            setStackShow('reactjs')
          }} 
          src="/icons/reactjs.svg" 
          alt="" 
          className={stackShow === 'reactjs' ? techStyles.Active : ''}
        />
        <img 
          onMouseEnter={() => {
            setStackShow('nextjs')
          }} 
          src="/icons/nextjs.svg" alt=""
          className={stackShow === 'nextjs' ? techStyles.Active : ''}
        />
      </div>
    </>
  )
}

const ExplainStacksTexts = ({
  stackLabel
}: {
  stackLabel: string
}) => {
  const getStackTexts = () => {
    const findStackText = StacksLabels.find(stack => stack.section === stackLabel) as StacksLabelsType

    return findStackText.texts
  }

  return (
    <>
      {stackLabel === 'html' && 
        <TypeAnimation
          sequence={getStackTexts()}
          wrapper="p"
          speed={70}
          style={{ fontSize: '1em', display: 'inline-block' }}
          repeat={Infinity}
          className={techStyles.Text}
        />
      }
      {stackLabel === 'css' && 
        <TypeAnimation
          sequence={getStackTexts()}
          wrapper="p"
          speed={70}
          style={{ fontSize: '1em', display: 'inline-block' }}
          repeat={Infinity}
          className={techStyles.Text}
        />
      }
      {stackLabel === 'javascript' && 
        <TypeAnimation
          sequence={getStackTexts()}
          wrapper="p"
          speed={70}
          style={{ fontSize: '1em', display: 'inline-block' }}
          repeat={Infinity}
          className={techStyles.Text}
        />
      }
      {stackLabel === 'jquery' && 
        <TypeAnimation
          sequence={getStackTexts()}
          wrapper="p"
          speed={70}
          style={{ fontSize: '1em', display: 'inline-block' }}
          repeat={Infinity}
          className={techStyles.Text}
        />
      }
      {stackLabel === 'sass' && 
        <TypeAnimation
          sequence={getStackTexts()}
          wrapper="p"
          speed={70}
          style={{ fontSize: '1em', display: 'inline-block' }}
          repeat={Infinity}
          className={techStyles.Text}
        />
      }
      {stackLabel === 'typescript' && 
        <TypeAnimation
          sequence={getStackTexts()}
          wrapper="p"
          speed={70}
          style={{ fontSize: '1em', display: 'inline-block' }}
          repeat={Infinity}
          className={techStyles.Text}
        />
      }
      {stackLabel === 'reactjs' && 
        <TypeAnimation
          sequence={getStackTexts()}
          wrapper="p"
          speed={70}
          style={{ fontSize: '1em', display: 'inline-block' }}
          repeat={Infinity}
          className={techStyles.Text}
        />
      }
      {stackLabel === 'nextjs' && 
        <TypeAnimation
          sequence={getStackTexts()}
          wrapper="p"
          speed={70}
          style={{ fontSize: '1em', display: 'inline-block' }}
          repeat={Infinity}
          className={techStyles.Text}
        />
      }
    </>
  )
}