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
      'HTML',
      2000,
      'Tenho solido conhecimento nesta linguagem de marcação(Sintaxe, tags, boas práticas).',
      1500,
      '1 Ano de experiência',
      2000,
    ]
  },
  {
    section: 'css',
    texts: [
      'CSS',
      2000,
      'Tenho sólido conhecimento, sei estilizar e montar layouts avançados e interativos.',
      2000,
    ]
  },
  {
    section: 'javascript',
    texts: [
      'JavaScript',
      2000,
      'Tenho um embasamento sólido, sei criar e alterar scripts, fazer requisições e dinamismo.',
      2000,
      'Bom conhecimento em boas práticas.',
      1500,
      ''
    ]
  },
  {
    section: 'jquery',
    texts: [
      'JQuery',
      2000,
      'JQuery é um biblioteca leve, rápida e cheia de recursos para Javascript.',
      2000,
    ]
  },
  {
    section: 'sass',
    texts: [
      'SASS',
      2000,
      'Syntactically Awesome Style Sheets',
      2000,
    ]
  },
  {
    section: 'typescript',
    texts: [
      'TypeScript',
      2000,
      'Tipagem estática e interfaces com fácil detecção e resolução de erros.',
      2000,
    ]
  },
  {
    section: 'reactjs',
    texts: [
      'ReactJS',
      2000,
      'Eficiente e flexível para criar interfaces com o usuário.',
      2000,
    ]
  },
  {
    section: 'nextjs',
    texts: [
      'NextJS',
      2000,
      'Criação de sites simples e para criarmos back-end de aplicações.',
      2000,
    ]
  }
]


export const StacksView = () => {
  const {  
    updateActualPage,
    typeTextTime,
    typeTitleTime
  } = useContext(PaginationContext)

  const [stackShow, setStackShow] = useState('')
  const [stackVisits, setStackVisits] = useState(0)

  useEffect(() => {
    setStackVisits(stackVisits + 1)
  }, [stackShow])

  return (
    <>
      <div className={`${styles.ChatBox} ${techStyles.ChatBox}`}>
        <TypeAnimation
          sequence={[
            'Minhas Stacks:',
          ]}
          wrapper="h1"
          speed={typeTitleTime}
          style={{ display: 'inline-block' }}
          omitDeletionAnimation
          repeat={0}
          className={styles.TypeTitle}
        />
        <TypeAnimation
          sequence={[
            1000,
            'Venho aprimorando meu conhecimento diariamente com cursos, projetos pessoais no Github e meetings com amigos desenvolvedores experientes.',
            2000,
            'Tente passar o mouse ou clicar em cada tecnologia para entender meu nível de conhecimento em cada uma delas. (Veja pelo menos 5 para ir ao próximo cenário)',
            4000,
          ]}
          wrapper="p"
          omitDeletionAnimation
          speed={typeTextTime}
          style={{ display: 'inline-block' }}
          repeat={0}
          className={styles.TypeText}
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
          className={stackShow === 'html' ? techStyles.html : ''}
        />
        <img 
          onMouseEnter={() => {
            setStackShow('css')
          }} 
          src="/icons/css.svg" 
          alt="" 
          className={stackShow === 'css' ? techStyles.css : ''}
        />
        <img 
          onMouseEnter={() => {
            setStackShow('javascript')
          }} 
          src="/icons/javascript.svg" 
          alt="" 
          className={stackShow === 'javascript' ? techStyles.js : ''}
        />
        <img 
          onMouseEnter={() => {
            setStackShow('jquery')
          }} 
          src="/icons/jquery.svg" 
          alt="" 
          className={stackShow === 'jquery' ? techStyles.jQuery : ''}
        />
        <img 
          onMouseEnter={() => {
            setStackShow('sass')
          }} 
          src="/icons/sass.svg" 
          alt="" 
          className={stackShow === 'sass' ? techStyles.sass : ''}
        />
        <img 
          onMouseEnter={() => {
            setStackShow('typescript')
          }} 
          src="/icons/typescript.svg" 
          alt="" 
          className={stackShow === 'typescript' ? techStyles.TypeScript: ''}
        />
        <img 
          onMouseEnter={() => {
            setStackShow('reactjs')
          }} 
          src="/icons/reactjs.svg" 
          alt="" 
          className={stackShow === 'reactjs' ? techStyles.React : ''}
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
  const {
    typeTextTime
  } = useContext(PaginationContext)

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
          speed={typeTextTime}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
          className={techStyles.Text}
        />
      }
      {stackLabel === 'css' && 
        <TypeAnimation
          sequence={getStackTexts()}
          wrapper="p"
          speed={typeTextTime}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
          className={techStyles.Text}
        />
      }
      {stackLabel === 'javascript' && 
        <TypeAnimation
          sequence={getStackTexts()}
          wrapper="p"
          speed={typeTextTime}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
          className={techStyles.Text}
        />
      }
      {stackLabel === 'jquery' && 
        <TypeAnimation
          sequence={getStackTexts()}
          wrapper="p"
          speed={typeTextTime}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
          className={techStyles.Text}
        />
      }
      {stackLabel === 'sass' && 
        <TypeAnimation
          sequence={getStackTexts()}
          wrapper="p"
          speed={typeTextTime}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
          className={techStyles.Text}
        />
      }
      {stackLabel === 'typescript' && 
        <TypeAnimation
          sequence={getStackTexts()}
          wrapper="p"
          speed={typeTextTime}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
          className={techStyles.Text}
        />
      }
      {stackLabel === 'reactjs' && 
        <TypeAnimation
          sequence={getStackTexts()}
          wrapper="p"
          speed={typeTextTime}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
          className={techStyles.Text}
        />
      }
      {stackLabel === 'nextjs' && 
        <TypeAnimation
          sequence={getStackTexts()}
          wrapper="p"
          speed={typeTextTime}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
          className={techStyles.Text}
        />
      }
    </>
  )
}