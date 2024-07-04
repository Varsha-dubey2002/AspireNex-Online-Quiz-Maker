import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import  { auth } from '../../Firebase';



export const NavBar = (props) => {

      return (
        <>
        
        <div className="navbar">
            <div className='logo'><span class="material-icons">
quiz
</span><p>Rendy Quiz</p></div>


            <div className='Nav_link'>
            <Link to='/home' className='link'><span > Home</span> </Link>
        
        <div class="dropdown">
    <span class="dropbtn">Quizzies
      <i class="fa fa-caret-down"></i>
    </span>
    <div class="dropdown-content">
      <Link to={'/jsquiz'} className='link'><span >javascript Quiz</span></Link>
      <Link to={'/Htmlquiz'} className='link'><span >Html quiz </span></Link>
      <Link to={'/Cssquiz'} className='link'>  <span >CSS Quiz</span></Link>
      
    
    </div>
  </div> 

         <Link to ='/adminlogin' className='link'>  <span >Admin
          </span> </Link> 
             <Link  to ='/' ><span className='signoutlink' onClick={()=>auth.signOut()} >Sign Out</span></Link> 

            </div>
           
            
          </div>
        
     
        </>
        
        
    
      )
    }
  
