import { Quiz } from "./quizType.js"

export const quiz: Quiz[] = [
  {
    quizName: "General Knowledge",
    quizImage: "https://www.quizony.com/general-knowledge-quiz/imageForSharing.png",
    questions: [
      {
        questionNumber: 1,
        question: "The symbol of ‘Lotus’ signifies …",
        points: 3,
        negativePoints: 1,
        options: [
          {
            value: "A - Culture and Civilization",
            isRight: true
          },
          {
            value: "B - Symbol of Protection",
            isRight: false
          },
          {
            value: "C - Sign of Danger",
            isRight: false
          },
          {
            value: "D - Sign of Protest",
            isRight: false
          }
        ]
      },
      {
        questionNumber: 2,
        question: "The term ‘volley’ is related to …",
        points: 3,
        negativePoints: 1,
        options: [
          {
            value: "A - Base ball",
            isRight: false
          },
          {
            value: "B - Lawn Tennis",
            isRight: true
          },
          {
            value: "C - Polo",
            isRight: false
          },
          {
            value: "D - Boxing",
            isRight: false
          }
        ]
      },
      {
        questionNumber: 3,
        question: "Vikram Sarabhai Space Center is located in …",
        points: 3,
        negativePoints: 1,
        options: [
          {
            value: "A - Udhagamandalam",
            isRight: false
          },
          {
            value: "B - Mumbai",
            isRight: false
          },
          {
            value: "C - Thiruvananthapuram",
            isRight: true
          },
          {
            value: "D - Kolkata",
            isRight: false
          }
        ]
      },
      {
        questionNumber: 4,
        question: "Which among the following is also popular as ‘Evening Star’ and ‘Morning Star?’",
        points: 3,
        negativePoints: 1,
        options: [
          {
            value: "A - Mercury",
            isRight: false
          },
          {
            value: " B - Venus",
            isRight: true
          },
          {
            value: "C - Mars",
            isRight: false
          },
          {
            value: "D - Neptune",
            isRight: false
          }
        ]
      },
      {
        questionNumber: 5,
        question: "Which among the following is the heaviest animal in the world?",
        points: 3,
        negativePoints: 1,
        options: [
          {
            value: "A - Giraffe",
            isRight: true
          },
          {
            value: "B - Elephant",
            isRight: false
          },
          {
            value: "C - Zebra",
            isRight: false
          },
          {
            value: "D - Camel",
            isRight: false
          }
        ]
      },
    ]
  },
  {
    quizName: "Indian Sports Quiz",
    quizImage: "https://gjquiz.com/wp-content/uploads/2021/05/Indian-Sports-Quiz-GjQuiz.jpg",
    questions: [
      {
        questionNumber: 1,
        question: "Total number of gold medal won by Indian Hockey Team in Olympics",
        points: 3,
        negativePoints: 1,
        options: [
          {
            value: "A - 8",
            isRight: true
          },
          {
            value: "B - 12",
            isRight: false
          },
          {
            value: "C - 6",
            isRight: false
          },
          {
            value: "D - 9",
            isRight: false
          }
        ]
      },
      {
        questionNumber: 2,
        question: "In which stadium Tendulkar completed his 100th Century",
        points: 3,
        negativePoints: 1,
        options: [
          {
            value: "A - Eden Garden",
            isRight: false
          },
          {
            value: "B - Shere Bangla Stadium",
            isRight: true
          },
          {
            value: "C - Firoz Shah Kotla Ground",
            isRight: false
          },
          {
            value: "D - Wankhede stadium",
            isRight: false
          }
        ]
      },
      {
        questionNumber: 3,
        question: "Which one is the oldest football club in India",
        points: 3,
        negativePoints: 1,
        options: [
          {
            value: "A - Mohun Bagan A.C",
            isRight: true
          },
          {
            value: "B - East Bengal F C",
            isRight: false
          },
          {
            value: "C - Mohammedan S C",
            isRight: false
          },
          {
            value: "D - Mahindra United",
            isRight: false
          }
        ]
      },
      {
        questionNumber: 4,
        question: "Who is the first recipient of Rajiv Gandhi Khel Ratna Award",
        points: 3,
        negativePoints: 1,
        options: [
          {
            value: "A - Sunil Gavaskar",
            isRight: true
          },
          {
            value: "B - Sachin Tendulkar",
            isRight: false
          },
          {
            value: "C - Milkha Singh",
            isRight: false
          },
          {
            value: "D - Viswanathan Anand",
            isRight: false
          }
        ]
      },
      {
        questionNumber: 5,
        question: "Who is the first indian shuttler to win 'All England Badminton Championships'",
        points: 3,
        negativePoints: 1,
        options: [
          {
            value: "A - Saina Nehwal",
            isRight: false
          },
          {
            value: "B - Jwala Gutta",
            isRight: false
          },
          {
            value: "C - Prakash Padukone",
            isRight: true
          },
          {
            value: "D - Pullela Gopichand",
            isRight: false
          }
        ]
      }
    ]
  }
]