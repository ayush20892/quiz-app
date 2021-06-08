import "./quizResult.css"
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai"
import { useQuiz } from "../../context/quizContext/quizContext"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useUser } from "../../context/userContext/userContext"

export function QuizResult () {
  const { quizState, quizDispatch } = useQuiz()
  const { userDispatch } = useUser()

  useEffect(() => {
    quizDispatch({type: "RIGHT-WRONG"})
    userDispatch({type: "UPDATE-SCORE", payload: quizState.currentQuizScore})
    quizDispatch({type: "CLEAR-OPTIONS"})
  },[quizDispatch])
  return(
    <div className="quizResult">
      <div className="score">
        Quiz Score: <span>{quizState.currentQuizScore}</span>
      </div>
      <div className="correctly-answered">
        <AiOutlineCheck style={{fill: "green"}}/> <span>{quizState.userAnswer.right}</span>
        Correct
      </div>
      <div className="wrongly-answered">
        <AiOutlineClose style={{fill: "red"}}/> 
        <span>{quizState.userAnswer.wrong}</span> Wrong
      </div>
      <Link to="/">Home</Link>
    </div>
  )
}