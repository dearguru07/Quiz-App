import React from "react";

const Result = ({ score, total, resetQuiz }) => {
  return (
    <div className="result">
      <h2><i class="bi bi-activity"></i> Quiz Results <i class="bi bi-activity"></i></h2>
      <p>
        You scored {score} out of {total}.
      </p>
      <button className="btn2" onClick={resetQuiz}>Restart Quiz <i class="bi bi-arrow-repeat"></i></button>
    </div>
  );
};

export default Result;