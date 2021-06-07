import { useReducer, createContext, useContext, useEffect } from "react";
import { QuizProviderType } from "./quizContextType";
import { quizReducer, initialState } from "../../reducer/quizReducer";


export const QuizContext = createContext({} as QuizProviderType)

export function QuizProvider({children}: any) {
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState)

  useEffect(() => {
    localStorage.setItem("optionSelected", JSON.stringify(quizState.optionSelected)) 
  },[quizState])

  return(
    <QuizContext.Provider value={{quizState, quizDispatch}}>
      {children}
    </QuizContext.Provider>
  )
}

export function useQuiz() {
  return useContext(QuizContext)
}

