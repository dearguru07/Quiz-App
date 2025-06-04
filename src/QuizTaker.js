import React, { useState, useEffect } from "react";

const QuizTaker = ({ quiz, setScore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft((prev) => Math.max(0, prev - 1)), 1000);
    if (timeLeft === 0) nextQuestion();
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentIndex < quiz.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTimeLeft(30);
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    const score = userAnswers.reduce(
      (total, answer, index) => (answer === quiz[index].correct ? total + 1 : total),
      0
    );
    setScore(score);
  };

  return (
    <div className="quiz-taker">
      <h2>Take Quiz</h2>
      <p>Time Left: {timeLeft}s</p>
      <h3>{quiz[currentIndex].question}</h3>
      {quiz[currentIndex].options.map((option, index) => (
        <button className="submit-btn" key={index} onClick={() => handleAnswer(index)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuizTaker;


import React, { useState, useEffect } from "react";

const QuizTaker = ({ quiz, setScore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft((prev) => Math.max(0, prev - 1)), 1000);
    if (timeLeft === 0) nextQuestion();
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentIndex < quiz.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTimeLeft(30);
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    const score = userAnswers.reduce(
      (total, answer, index) => (answer === quiz[index].correct ? total + 1 : total),
      0
    );
    setScore(score);
  };

  return (
    <div className="quiz-taker">
      <h2>Take Quiz</h2>
      <p>Time Left: {timeLeft}s</p>
      <h3>{quiz[currentIndex].question}</h3>
      {quiz[currentIndex].options.map((option, index) => (
        <button className="submit-btn" key={index} onClick={() => handleAnswer(index)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuizTaker;
