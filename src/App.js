import React, { useState } from "react";
import QuizTaker from "./QuizTaker";
import QuizCreator from "./QuizCreator";
import Result from "./result";

const App = () => {
  const [quiz, setQuiz] = useState([]);
  const [score, setScore] = useState(null);

  return (
    <div className="container">
      <h1>Online Quiz Platform</h1>
      {quiz.length === 0 ? (
        <QuizCreator setQuiz={setQuiz} />
      ) : score === null ? (
        <QuizTaker quiz={quiz} setScore={setScore} />
      ) : (
        <Result score={score} total={quiz.length} resetQuiz={() => setQuiz([])} />
      )}
    </div>
  );
};

export default App;
