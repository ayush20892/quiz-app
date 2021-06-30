import "./quizResult.css"
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai"
import { useQuiz } from "../../context/quizContext/quizContext"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useUser } from "../../context/userContext/userContext"
import { updateUserScore } from "../../networkCalls"

export function QuizResult () {
  const { quizState, quizDispatch } = useQuiz()
  const { userState, userDispatch } = useUser()

  useEffect(() => {
    quizDispatch({type: "RIGHT-WRONG"})
    quizDispatch({type: "CLEAR-OPTIONS"})
  },[quizDispatch])

  useEffect(() => {
    (async () => {
      await updateUserScore(userState, quizState.currentQuizScore, userDispatch)
    })()
  },[quizDispatch])

  return(
    <div className="quizResult">
      <div className="score">
        Quiz Score: <span>{quizState.currentQuizScore}</span>
      </div>
      <div className="right-wrong">
        <div className="correctly-answered answered-box">
          <AiOutlineCheck style={{fill: "green"}}/> <span>{quizState.userAnswer.right}</span>
          Correct
        </div>
        <div className="wrongly-answered answered-box">
          <AiOutlineClose style={{fill: "red"}}/> 
          <span>{quizState.userAnswer.wrong}</span> Wrong
        </div>
      </div>
      <Link to="/">Home</Link>
    </div>
  )
}