import React from 'react'
import "./CSS/LoginSignup.css"

function LoginSignup() {
  return (
    <div className='loginSignup'>
      <div className='loginsignup-container'>
        <h1>Sign up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Email Adderss'/>
          <input type='password' placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span> Login here</span></p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id=''/>
          <p>By continuing, I agree to terms and conditions & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup