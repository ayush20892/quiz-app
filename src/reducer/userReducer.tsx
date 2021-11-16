import { ActionUser, InitialStateUser } from "../context/userContext/userContextType";

export const initialStateUser: InitialStateUser = {
  userName: "" || JSON.parse(localStorage.getItem("userName")!),
  score: null ? 0 : JSON.parse(localStorage.getItem("userScore")!)
}

export function userReducer (state: InitialStateUser, action: ActionUser) {
  switch(action.type) {
    case "ADD-USER":
      localStorage.setItem("userName", JSON.stringify(action.payload))
      return {...state, userName: action.payload}
    case "DELETE-USER":
      localStorage.removeItem("userName")
      localStorage.removeItem("userScore")
      return {...state, userName: "", score: 0}
    case "UPDATE-SCORE":
      console.log("Entered", state.score, action.payload)
      return {...state, score: state.score + action.payload }
    case "RESET-USER": 
      return {...state, score: 0}
    default: 
      return {...state}
  }
}