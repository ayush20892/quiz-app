import "./quizList.css"
import { Quiz } from "../../data/quizType"
import { useNavigate } from "react-router";

export function QuizList({quizName, quizImage}: Quiz ) {
  const navigate = useNavigate()
  return(
    <div className="quiz-card">
      <img src={quizImage!} alt={quizName} />
      <h3>{quizName}</h3>
      <button onClick={() => navigate(`/quiz/${quizName}/${0}`)}>Start Quiz</button>
    </div>
  );
}