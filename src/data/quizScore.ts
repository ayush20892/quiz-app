import { Option, Question } from "./quizType"

export function QuizScore(currentScore: number, question: Question, selectedOption: Option): number{

  return selectedOption.isRight ? currentScore + question.points : currentScore - question.negativePoints
}

