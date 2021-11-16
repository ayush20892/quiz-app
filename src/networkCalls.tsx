import axios from "axios";
import { ActionUser, InitialStateUser } from "./context/userContext/userContextType";

export const postNewUser = async (userName: string, userDispatch: (action: ActionUser) => void) => {
    try{
      const res = await axios.post("https://api-quiz-unusual.herokuapp.com/user", {
      userName: userName,
      score: 0
      })
      if(res.status === 201)
        userDispatch({type: "ADD-USER", payload: userName});
      return 1
    } catch (err) {
      console.log(err)
      return 0
    }
}

export const deleteUser = async (userName: string, userDispatch: (action: ActionUser) => void) => {
  try {
    const res = await axios.delete(`https://api-quiz-unusual.herokuapp.com/user/${userName}`)

    userDispatch({type: "DELETE-USER"})
    console.log(res.status)
  } catch(err) {
    console.log(err)
  }
  
}

export const updateUserScore = async (user: InitialStateUser, score: number, userDispatch: (action: ActionUser) => void) => {
  try {
    const res = await axios.post(`https://api-quiz-unusual.herokuapp.com/user/${user.userName}`, {
      score: user.score + score
    })
    
  } catch(err) {
    console.log(err)
  }
}

export const resetUserScore = async (user: InitialStateUser, userDispatch: (action: ActionUser) => void) => {
  try {
    const res = await axios.post(`https://api-quiz-unusual.herokuapp.com/user/${user.userName}`, {
      score: 0
    })
    userDispatch({type: "RESET-USER"});
  } catch(err) {
    console.log(err)
  }
}


export const getQuiz = async () => {
  try {
    const res = await axios.get("https://api-quiz-unusual.herokuapp.com/quiz")
  }  catch(err) {
    console.log(err)
  }
}