import React, { useState } from 'react'
import './quiz.css';
import { NavBar } from '../Home/NavBar';
import { useNavigate } from 'react-router-dom';

export const Itquiz = () => {

   const questions = [

    {
      question: "Thohoyandou is based in which province?",
      answers: [
        { text: "Limpopo", correct: true },
        { text: "Kwazulu Natal", correct: false },
        { text: "Gauteng", correct: false },
        { text: "Mpumalanga", correct: false },

      ]
    },
    {
      question: "what is name of the dam found in venda?",
      answers: [
        { text: "Albert Falls Dam", correct: false },
        { text: "Nandoni dam", correct: true },
        { text: "Alexandra Dam", correct: false },
        { text: "Allemanskraal Dam", correct: false },
      ]
    },
    {
      question: "the location of the borders in limpopo?",
      answers: [
        { text: "Louis trichardt", correct: false },
        { text: "Messina", correct: true },
        { text: "Polokwane", correct: false },
        { text: "thabazimbi", correct: false },
      ]
    },
    {
      question: "Best hotel/logde found in venda?",
      answers: [
        { text: "2ten/MGB", correct: true },
        { text: "Summerset Place Country House", correct: false },
        { text: "Phumelo Lodge", correct: false },
        { text: " Zebula Golf Estate & Spa", correct: false },
      ]
    },
    {
      question: "Musician from limpopo that won SAMA awards?",
      answers: [
        { text: "Makhadzi", correct: true },
        { text: "sho majozi", correct: false },
        { text: "Master Kg", correct: false },
        { text: " Benny Mayengani", correct: false },
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
              <h1>simple Quiz</h1>
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
