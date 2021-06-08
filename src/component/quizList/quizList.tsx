import "./quizList.css"
import { Quiz } from "../../data/quizType"
import { useNavigate } from "react-router";

export function QuizList({quizName, quizImage}: Quiz ) {
  const navigate = useNavigate()
  const startQuiz = 0;
  return(
    <div className="quiz-card">
      <img src={quizImage!} alt={quizName} />
      <h3>{quizName}</h3>
      <button onClick={() => navigate(`/quiz/${quizName}/${startQuiz}`)}>Start Quiz</button>
    </div>
  );
}