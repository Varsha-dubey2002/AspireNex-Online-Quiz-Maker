import React, { useState } from 'react'
import './quiz.css';
import { NavBar } from '../Home/NavBar';
import { useNavigate } from 'react-router-dom';

export const Quiz2 = () => {
    const questions = [

        {
          question: " What does HTML stand for?",
          answers: [
            { text: "HyperText Markup Language", correct: true },
            { text: "Hotmail", correct: false },
            { text: "javascript", correct: false },
            { text: "hyper", correct: false },
    
          ]
        },
        {
          question: " How many tags are in a regular HTML element?",
          answers: [
            { text: "2", correct: false },
            { text: "5", correct: true },
            { text: "1", correct: false },
            { text: "3", correct: false },
          ]
        },
        {
          question: "What is always a welcome page, and explains the purpose or topic of the site?",
          answers: [
            { text: " Page 4", correct: false },
            { text: "Homepage", correct: true },
            { text: "Table of contents", correct: false },
            { text: "Syntax", correct: false },
          ]
        },
        {
          question: "What is the difference between an opening tag and a closing tag?",
          answers: [
            { text: "Closing tag has a / in front.", correct: true },
            { text: "There is no difference", correct: false },
            { text: "Opening tag has a / in front.", correct: false },
          ]
        },
        {
          question: " In which section or part of an HTML document is the meta tag typically located?",
          answers: [
            { text: "Any page", correct: true },
            { text: "Last page", correct: false },
            { text: "Second page", correct: false },
            { text: " Middle page", correct: false },
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
                  <h1>HTML  Quiz</h1>
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
    
