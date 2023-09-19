import { ReactNode, createContext, useState, useEffect } from "react";

type PaginationContextType = {
  actualPage: string;
  updateActualPage: (page: string) => void
  canViewExperience: boolean
}

export const PaginationContext = createContext({} as PaginationContextType)

export const PaginationContextProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [actualPage, setActualPage] = useState('Home')
  const [changePageCounter, setChangePageCounter] = useState(0)
  const [canViewExperience, setCanViewExperience] = useState(false)

  useEffect(() => {
    setChangePageCounter(changePageCounter + 1)
  }, [actualPage])

  useEffect(() => {
    if (changePageCounter < 4) {
      return
    }

    setCanViewExperience(true)  
  }, [changePageCounter])

  const updateActualPage = (page: string) => {
    setActualPage(page)
  }

  return (
    <PaginationContext.Provider value={{
      actualPage,
      updateActualPage,
      canViewExperience
    }}>
      {children}
    </PaginationContext.Provider>
  )
}