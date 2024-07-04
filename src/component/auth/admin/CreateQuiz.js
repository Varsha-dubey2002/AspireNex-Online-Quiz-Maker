import React from 'react'
import './createquiz.css';
import { Navbar } from './Navbar';
import './createquiz.css';


export const CreateQuiz = () => {
  
  
  return (
    <>
    <Navbar/>
    <div className="app">
<form className='question1'>
<h3>question 1</h3>
  <label>
   question: <input type='text' value="" placeholder='Enter Question'/>
  </label>
 
  <label>
    Answer: <input type='text' value="" placeholder='Enter correct answer'/>
  </label>
  <label>
    Answer2: <input type='text' value="" placeholder='Enter answer2'/>
  </label>
  <label>
    Answer3: <input type='text' value="" placeholder='Enter answer3'/>
  </label>
  <label>
  Answer4: <input type='text' value="" placeholder='Enter answer3'/>
  </label>
  <button>Create Quiz</button>
</form>


</div>

    </>
   
  )
}
