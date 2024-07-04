import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../Firebase';
import './login.css';
export const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const user=await
              auth.createUserWithEmailAndPassword(email, password);
            if (user){
                alert("account created Sucessfully!")
            }
          } catch (error) {
            alert(error);
          }
        };
    
  return (
    <>
    <h1>Sign up</h1>
    <div className='app'>
    <form >
    <label>
          Email:
          <input name="email" type="email" placeholder="Email" value={email}  onChange={(e)=>setEmail(e.target.value)} required />
        </label><br/>
        <label>
          Password:
          <input name="password" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
        </label><br/>
    <button type="submit" onClick={handleSubmit}>Sign Up</button>
   
    <p>Already Have an  Account <Link to="/"> Login now</Link></p>
  </form>
  </div>
    </>
   
  )
}
