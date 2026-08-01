import { useState } from "react";
import "./index.css";

function App() {
  const quizData = [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Bangalore", "Chennai"],
      answer: "Delhi",
    },
    {
      question: "Which language is used in React?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript",
    },
    {
      question: "Who developed React?",
      options: ["Google", "Microsoft", "Facebook", "Apple"],
      answer: "Facebook",
    },
    {
      question: "Which hook is used to store data in React?",
      options: ["useEffect", "useState", "useRef", "useMemo"],
      answer: "useState",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>

      {showResult ? (
        <div className="result">
          <h2>Quiz Completed!</h2>
          <h3>
            Your Score: {score} / {quizData.length}
          </h3>

          <button onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <h2>
            Question {currentQuestion + 1} of {quizData.length}
          </h2>

          <h3>{quizData[currentQuestion].question}</h3>

          {quizData[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className="option-btn"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </>
      )}
    </div>
  );
}

export default App;