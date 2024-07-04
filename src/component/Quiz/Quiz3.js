import React, { useState } from 'react'
import './quiz.css';
import { NavBar } from '../Home/NavBar';
import { useNavigate } from 'react-router-dom';

export const Quiz3 = () => {
    const questions = [

        {
          question: " What is CSS?",
          answers: [
            { text: "All of the mentioned", correct: true },
            { text: "CSS is the language used to style the HTML documents", correct: false },
            { text: "CSS is designed to separate the presentation and content, including layout, colors, and fonts", correct: false },
            { text: "CSS is a style sheet language", correct: false },
    
          ]
        },
        {
          question: " Which of the following tag is used to embed css in html page?",
          answers: [
            { text: "<script>", correct: false },
            { text: "<style>", correct: true },
            { text: "<css>", correct: false },
            { text: "<!DOCTYPE html>", correct: false },
          ]
        },
        {
          question: " Which of the following CSS property is used to make the text bold?",
          answers: [
            { text: " font-style: bold", correct: false },
            { text: "font-weight: bold", correct: true },
            { text: "text-decoration: bold", correct: false },
            { text: "text-align: bold", correct: false },
          ]
        },
        {
          question: "  Which of the following property is used to align the text in a table?",
          answers: [
            { text: "Text-align", correct: true },
            { text: "align", correct: false },
            { text: "text", correct: false },
            { text: " none of the mentioned", correct: false },
          ]
        },
        {
          question: "Which of the following CSS property defines the space between cells in a table?",
          answers: [
            { text: " border-spacing", correct: true },
            { text: "border-style", correct: false },
            { text: "image()", correct: false },
            { text: " gradient()", correct: false },
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
                  <h1>CSS Quiz</h1>
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
    
