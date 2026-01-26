import { useState } from "react";

function Quiz() {

  const questionBank = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: "Mars"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
      correctAnswer: "Harper Lee"
    }
  ];

  const initialAnswers = [null, null, null];

  const [userAnswers, setUserAnswers] = useState(initialAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleSelectOption(option) {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = option;
    setUserAnswers(newAnswers);
  }

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>

      <p className="question">
        {questionBank[currentQuestion].question}
      </p>

      {questionBank[currentQuestion].options.map((option, index) => (
        <button
          key={index}
          className="option"
          onClick={() => handleSelectOption(option)}
        >
          {option}
        </button>
      ))}

      <div className="nav-buttons">
        <button
          onClick={() => setCurrentQuestion(q => Math.max(q - 1, 0))}
        >
          Previous
        </button>

        <button
          onClick={() => setCurrentQuestion(q => Math.min(q + 1, questionBank.length - 1))}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
