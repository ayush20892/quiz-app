import { Header } from "../component/header/header"
import { quiz } from "../data/getQuiz";
import { QuizList } from "../component/quizList/quizList";
import { useEffect } from "react";
import { useQuiz } from "../context/quizContext/quizContext";
import { useUser } from "../context/userContext/userContext";
import { refreshPage } from "../util";

export function Home() {
  const { quizDispatch } = useQuiz()
  const { userDispatch } = useUser()
  useEffect(() => {
    quizDispatch({type: "RESET"})
  })
  return (
    <div className="App">
      <Header heading={"General Fun Game"} greeting={"Welcome,"} username={"Ayush"}/>
      {quiz.map(({quizName, quizImage}) => {
          return(
            <QuizList quizName={quizName} quizImage={quizImage!} key={quizName} />
          );
      })}
      <button onClick={() => userDispatch({type: "RESET-USER"})}>Reset User Score</button>
      <button onClick={() => {
        userDispatch({type: "DELETE-USER"})
        refreshPage()
      }}>
        Delete User
      </button>
    </div>
  );
}