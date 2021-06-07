import { Header } from "../component/header/header";
import { useParams } from "react-router";
import { QuizResult } from "../component/quizResult/quizResult";

export function QuizEnd () {
  const { quizName } = useParams()
  return(
    <div>
      <Header heading={quizName} greeting={"Player : "} username={"Ayush"} />
      <QuizResult />
    </div>
  );
}