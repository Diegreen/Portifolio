import { ReactNode, createContext, useState } from "react";

type PaginationContextType = {
  actualPage: string;
  updateActualPage: (page: string) => void
}

const ViewList = [
  'Home',
  'Sobre',
  'Stacks',
  'Estudos',
  'Experiencia'
]

export const PaginationContext = createContext({} as PaginationContextType)

export const PaginationContextProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [actualPage, setActualPage] = useState('Home')

  const updateActualPage = (page: string) => {
    setActualPage(page)
  }

  return (
    <PaginationContext.Provider value={{
      actualPage,
      updateActualPage
    }}>
      {children}
    </PaginationContext.Provider>
  )
}