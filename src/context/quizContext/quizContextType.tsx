import { Option, Question } from "../../data/quizType"

export type Initialstate = {
  currentQuizScore: number,
  optionSelected: Option[] | any
  userAnswer: {
    right: number,
    wrong: number
  },
  showAnswer: boolean
  timer: number,
}

export type Action = 
  | {type: "RESET"}
  | {type: "CURRENT-QUIZ-SCORE", payload: { question: Question, option: Option}}
  | {type: "SELECTED-OPTION", payload: Option }
  | {type: "CLEAR-OPTIONS"}
  | {type: "RIGHT-WRONG"}
  | {type: "SHOW-ANSWER", payload: boolean}
  | {type: "SET-TIMER", payload: number}

export type QuizProviderType = {
  quizState: Initialstate,
  quizDispatch: (action: Action) => void
}