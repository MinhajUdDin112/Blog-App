import React, { useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError(false);
      try {
        const res = await axios.post("/auth/register", {
          username,
          email,
          password,
        });
        res.data && window.location.replace("/login");
      } catch (err) {
        setError(true);
      }
    };

    return (
        <div className='register'>
            <span className="registerTitle">Register</span>
            <form action="" className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    className="registerInput" 
                    type="text" 
                    placeholder="Enter your username..." 
                    onChange={(e) => setUsername(e.target.value)}
                    />
                <label htmlFor="">Email</label>
                <input 
                    className="registerInput" 
                    type="text" 
                    placeholder='Enter Email'
                    onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="">Password</label>
                <input 
                    className="registerInput" 
                    type="password" 
                    placeholder='Enter Password'
                    onChange={(e) => setPassword(e.target.value)} />
                <button className='registerButton' type="submit">Register</button>
            </form>
            <button className="registerLoginButton" >
            <Link className='link' to="/login" >LogIn </Link>
            {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
            </button>
        </div>
    )
}
