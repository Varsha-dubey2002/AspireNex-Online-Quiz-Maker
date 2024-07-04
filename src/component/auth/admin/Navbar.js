import React from 'react'

import { Link } from 'react-router-dom';
import { auth } from '../../../Firebase';



export const Navbar = (props) => {

      return (
        <>
        
        <div className="navbar">
            <div className='logo'><span class="material-icons">
quiz
</span>Rendy Quiz</div>
<p className='username'>Hi username</p>

            <div className='Nav_link'>
            <Link to='/home' className='link'><span > Home</span> </Link>
        
       


             <Link  to ='/home' ><span onClick={()=>auth.signOut()} >Sign Out</span></Link> 

            </div>
           
            
          </div>
        
     
        </>
        
        
    
      )
    }
  
