import { ActionUser, InitialStateUser } from "../context/userContext/userContextType";

export const initialStateUser: InitialStateUser = {
  score: null ? 0 : JSON.parse(localStorage.getItem("userScore")!),
  userName: "" || JSON.parse(localStorage.getItem("userName")!),
}

export function userReducer (state: InitialStateUser, action: ActionUser) {
  switch(action.type) {
    case "ADD-USER":
      localStorage.setItem("userName", JSON.stringify(action.payload))
      localStorage.setItem("userScore", JSON.stringify(state.score))
      return {...state, userName: action.payload}
    case "DELETE-USER":
      localStorage.removeItem("userName")
      localStorage.removeItem("userScore")
      return {...state, userName: "", score: 0}
    case "UPDATE-SCORE":
      return {...state, score: state.score + action.payload }
    case "RESET-USER": 
      return {...state, score: 0}
    default: 
      return {...state}
  }
}