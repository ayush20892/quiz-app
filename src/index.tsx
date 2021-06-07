import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from "react-router-dom"
import { QuizProvider } from "./context/quizContext/quizContext"
import { UserProvider } from "./context/userContext/userContext"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <QuizProvider>
          <App />
        </QuizProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

