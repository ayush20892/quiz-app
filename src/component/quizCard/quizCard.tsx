import "./quizCard.css";
import { quiz } from "../../data/getQuiz";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useQuiz } from "../../context/quizContext/quizContext";
import { increaseQuestionNumber, buttonColor } from "../../util";

type quizCardProp = {
  quizName: string;
  questionNumber: number;
};

export function QuizCard({ quizName, questionNumber }: quizCardProp) {
  const quizData = quiz.find((singleQuiz) => singleQuiz.quizName === quizName)
    ?.questions!;
  const currentquestion = quizData[questionNumber];
  const { quizState, quizDispatch } = useQuiz();
  const navigate = useNavigate();

  useEffect(() => {
    quizDispatch({ type: "SHOW-ANSWER", payload: false });
    if (questionNumber < 5) quizDispatch({ type: "SET-TIMER", payload: 10 });
  }, [questionNumber, quizDispatch]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (quizState.timer > 0) {
      timeout = setTimeout(
        () => quizDispatch({ type: "SET-TIMER", payload: quizState.timer - 1 }),
        1000
      );
    } else {
      navigate(`/quiz/${quizName}/${increaseQuestionNumber(questionNumber)}`);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [quizState.timer, navigate, questionNumber, quizName, quizDispatch]);

  return (
    <main className="quiz-question-card">
      <div className="quiz-timer"> {quizState.timer} </div>
      <h2 className="question">
        Q{currentquestion.questionNumber}&gt; {currentquestion.question}
      </h2>
      {currentquestion.options.map((option) => {
        return (
          <div key={option.value} className="options">
            <button
              style={buttonColor(quizState.showAnswer, option)}
              onClick={() => {
                quizDispatch({ type: "SHOW-ANSWER", payload: true });
                quizDispatch({ type: "SELECTED-OPTION", payload: option });
                quizDispatch({
                  type: "CURRENT-QUIZ-SCORE",
                  payload: { question: currentquestion, option: option },
                });
              }}
            >
              {option.value}
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          navigate(
            `/quiz/${quizName}/${increaseQuestionNumber(questionNumber)}`
          );
        }}
      >
        Next
      </button>
      <div className="restart">
        <button
          onClick={() => {
            quizDispatch({ type: "RESET" });
            navigate(`/quiz/${quizName}/${0}`);
          }}
        >
          Resatart Quiz
        </button>

        <button
          onClick={() => {
            quizDispatch({ type: "RESET" });
            navigate(`/`);
          }}
        >
          Home
        </button>
      </div>
    </main>
  );
}
