import { Header } from "../component/header/header";
import { QuizCard } from "../component/quizCard/quizCard";
import { useParams } from "react-router";

export function QuizPage() {
  const { quizName, questionNumber } = useParams()
  return(
    <div>
      <Header heading={quizName} greeting={"Player : "} />
      <QuizCard quizName={quizName} questionNumber={+questionNumber}/>
    </div>
  );
}