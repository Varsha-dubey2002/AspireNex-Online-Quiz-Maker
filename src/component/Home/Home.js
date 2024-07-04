import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';
export const Home = () => {
  return (
    <div>
      <NavBar/>
 <h1>Welcome to Rendy Quiz</h1>
<div className='app'>
<Link to={'/quiz'}><h3>Take a Quiz</h3></Link>
</div>
    </div>
   
  )
}
