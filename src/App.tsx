import './App.css';
import { Routes, Route } from 'react-router-dom'
import { UserEntry } from './page/userEntry';
import { Home } from "./page/home"
import { QuizPage } from "./page/quizPage"
import { QuizEnd } from "./page/quizEnd"
import { LeaderBoard } from "./page/leaderBoard"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={localStorage.getItem("userName") === null ? <UserEntry /> : <Home />} />
        <Route path="/quiz/:quizName/:questionNumber" element={<QuizPage />} />
        <Route path="/quiz/:quizName/end" element={<QuizEnd />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
    </div>
  );
}

export default App;
