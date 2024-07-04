import React, { useState } from 'react'
import './quiz.css';
import { NavBar } from '../Home/NavBar';
import { useNavigate } from 'react-router-dom';


export const Quiz1 = () => {
  const questions = [

    {
      question: " Which type of JavaScript language is ___",
      answers: [
        { text: "Object-Based", correct: true },
        { text: "Assembly-language", correct: false },
        { text: "High-level", correct: false },
       

      ]
    },
    {
      question: "In JavaScript, what is a block of statement?",
      answers: [
        { text: "Conditional block", correct: false },
        { text: "block that combines a number of statements into a single compound statement", correct: true },
        { text: "block that contains a single statement", correct: false },
        { text: "Conditional block", correct: false },
      ]
    },
    {
      question: "Which one of the following operator is used to check weather a specific property exists or not:",
      answers: [
        { text: "Exit", correct: false },
        { text: "In", correct: true },
        { text: "Within", correct: false },
        { text: "Exists", correct: false },
      ]
    },
    {
      question: "The function and var are known as:",
      answers: [
        { text: "Declaration statements", correct: true },
        { text: "Data types", correct: false },
        { text: "Prototypes", correct: false },
        { text: " Keywords", correct: false },
      ]
    },
    {
      question: "Musician from limpopo that won SAMA awards?",
      answers: [
        { text: "Function/Method", correct: true },
        { text: "Triggering Event", correct: false },
        { text: "Preprocessor", correct: false },
        { text: " RMI", correct: false },
      ]
    },

  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(false);
  const [scoreMarks, setScoreMarks] = useState(0);
  const handAnswerBtnClick = (correct) => {

    if (correct === true) {
      alert("Answer is Correct")
      setScoreMarks(scoreMarks + 1);

    }
    else {
      alert("Answer is inCorrect")
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScore(true);
    }

  }
  const Navigate = useNavigate();
  return (
    <>
      <NavBar />
      <button className='close-btn' onClick={() => {
        Navigate("/home");
      }}>Close</button>
      <div className="app">
        {score ? (
          <div className='scores'>You Scored {scoreMarks} out {questions.length}</div>
        )

          : (
            <>
              <h1>javascript quiz</h1>
              <div className="quiz">
                <span>Quesiton {currentQuestion + 1}</span>/{questions.length}
                <h2 id="question">{questions[currentQuestion].question}</h2>
                <div id="answer-buttons">
                  {questions[currentQuestion].answers.map((answers) =>
                    <button class="btn" onClick={() =>
                      handAnswerBtnClick(answers.correct)}>{answers.text}</button>
                  )


                  }


                </div>
                <button id="next-btn">Next</button>
              </div>
            </>

          )}



      </div>


    </>
  )
}