import { ReactNode, createContext, useState, useEffect } from "react";

type GranularSpeed = {
  type: 'keyStrokeDelayInMs';
  value: number;
};
type Speed = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99;

type PaginationContextType = {
  actualPage: string;
  updateActualPage: (page: string) => void
  canViewExperience: boolean
  typeTitleTime: Speed | GranularSpeed;
  typeTextTime: Speed | GranularSpeed;
  typeTextInterval: number;
  typeTextIntervalLong: number;
}

type TypeTextConfigProps = {
  typeTitleTime: Speed | GranularSpeed;
  typeTextTime: Speed | GranularSpeed;
  typeTextInterval: number;
  typeTextIntervalLong: number;
}

const TYPE_TEXT_CONFIG: TypeTextConfigProps = {
  typeTitleTime: 50,
  typeTextTime: 70,
  typeTextInterval: 2000,
  typeTextIntervalLong: 4000
}

export const PaginationContext = createContext({} as PaginationContextType)

export const PaginationContextProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const {
    typeTextInterval,
    typeTextIntervalLong,
    typeTextTime,
    typeTitleTime
  } = TYPE_TEXT_CONFIG

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
      canViewExperience,
      typeTextInterval,
      typeTextIntervalLong,
      typeTextTime,
      typeTitleTime
    }}>
      {children}
    </PaginationContext.Provider>
  )
}