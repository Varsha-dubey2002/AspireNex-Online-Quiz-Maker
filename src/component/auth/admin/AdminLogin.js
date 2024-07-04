import React, { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import { auth } from '../../../Firebase';
import './auth.css';

export const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   const Navigate =useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const user=await
              auth.signInWithEmailAndPassword(email, password);
            if (user){
                alert("Login  Sucessfully!")
                Navigate('/createquiz')
            }
          } catch (error) {
            alert(error);
          }
        };
  return (
    <>
 <button className='close-btn' onClick={()=>{
  Navigate("/home");
 }}>Close</button>
    <h1>Sign In</h1>
    <div className='app'>
      
    <form >
    <label>
          Email:
          <input name="email"  type="email" placeholder="Email" value={email}  onChange={(e)=>setEmail(e.target.value)} required />
        </label><br/>
        <label>
          Password:
          <input name="password"  type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
        </label><br/>
    <button type="submit" onClick={handleSubmit} >Login</button>
   
    <p>Don't Have an  Account <Link to="/signup">Create Account </Link></p>
  </form>
    </div>
    
    </>
  )
}
