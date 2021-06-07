import "./quizResult.css"
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai"
import { useQuiz } from "../../context/quizContext/quizContext"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useUser } from "../../context/userContext/userContext"

export function QuizResult () {
  const { quizState, quizDispatch } = useQuiz()
  const { userState, userDispatch } = useUser()

  useEffect(() => {
    quizDispatch({type: "RIGHT-WRONG"})
    userDispatch({type: "UPDATE-SCORE", payload: quizState.currentQuizScore})
    quizDispatch({type: "CLEAR-OPTIONS"})
  },[quizDispatch])
  return(
    <div className="quizResult">
      <div className="score">
        Score: {quizState.currentQuizScore}
      </div>
      <div className="correctly-answered">
        <AiOutlineCheck /> {quizState.userAnswer.right}
      </div>
      <div className="wrongly-answered">
        <AiOutlineClose /> {quizState.userAnswer.wrong}
      </div>
      <Link to="/">Home</Link>
    </div>
  )
}