export type Option = {
  value: string,
  isRight: boolean
}

export type Question = {
  questionNumber: number,
  question: string,
  points: number,
  negativePoints: number,
  options: Option[]
}

export type Quiz = {
  quizName: string,
  quizImage?: string,
  questions?: Question[]
}