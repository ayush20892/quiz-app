import { Header } from "../component/header/header"
import { quiz } from "../data/getQuiz";
import { QuizList } from "../component/quizList/quizList";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useQuiz } from "../context/quizContext/quizContext";
import { useUser } from "../context/userContext/userContext";
import { refreshPage } from "../util";
import { deleteUser, resetUserScore } from "../networkCalls";

export function Home() {
  const { quizDispatch } = useQuiz()
  const { userState, userDispatch } = useUser()
  console.log(userState.score)
  const navigate = useNavigate()

  useEffect(() => {
    quizDispatch({type: "RESET"})
  },[])

  async function deleteUserHandler () {
    await deleteUser(userState.userName, userDispatch)
    refreshPage()
  }

  async function resetUserHandler () {
    await resetUserScore(userState, userDispatch)
  }

  return (
    <div className="App">
      <Header heading={"General Fun Game"} greeting={"Welcome,"}/>
      <div className="quiz-list">
      {quiz.map(({quizName, quizImage}) => {
          return(
            <QuizList quizName={quizName} quizImage={quizImage!} key={quizName} />
          );
      })}
      </div>
      <div className="home-btns">
        <button className="reset-user user-btn" onClick={resetUserHandler}>Reset User Score</button>
        <button className="delete-user user-btn" onClick={deleteUserHandler}>
          Delete User
        </button>
        <button className="delete-user user-btn" onClick={() => navigate("/leaderboard")}>
          LeaderBoard
        </button>
      </div>
    </div>
  );
}