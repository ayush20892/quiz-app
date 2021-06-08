import { Initialstate, Action } from "../context/quizContext/quizContextType";
import { Option } from "../data/quizType"
import { QuizScore } from "../data/quizScore";
 
export const initialState: Initialstate = {
  currentQuizScore: 0,
  optionSelected: JSON.parse(localStorage.getItem("optionSelected")!) || [],
  userAnswer: {
    right: 0,
    wrong: 0
  },
  showAnswer: false,
  timer: 10
}

export function quizReducer (state: Initialstate, action: Action) {
  switch(action.type) {
    case "RESET": 
      return {...state, currentQuizScore: 0, optionSelected: [], userAnswer: { right: 0, wrong: 0 }}
    case "CURRENT-QUIZ-SCORE":
      return {...state, currentQuizScore: QuizScore(state.currentQuizScore, action.payload.question, action.payload.option)}
    case "SELECTED-OPTION":
      return {...state, optionSelected: [...state.optionSelected, action.payload]}
    case "CLEAR-OPTIONS":
      return {...state, optionSelected: []}
    case "RIGHT-WRONG": 
      state.optionSelected.map((ele: Option) => {
        if(ele.isRight === true)
          state.userAnswer.right += 1
        else
          state.userAnswer.wrong += 1
        })
      return {...state, userAnswer: {right: state.userAnswer.right, wrong: state.userAnswer.wrong }}
    case "SHOW-ANSWER": 
      return {...state, showAnswer: action.payload}
    case "SET-TIMER":
      return {...state, timer: action.payload}
    default: 
      return {...state}
  }
}