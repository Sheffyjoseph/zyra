import React from 'react'
import "./Signin.css"

function Signin() {
  return (

      <div className="signin-container">
      <div className="signin-header">
          <h2>Sign in</h2>
        </div>  

        <form className="signin-form">

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder='Email'
            id="email"
            name="email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder='Password'
            id="password"
            name="password"
            required
          />
        </div>
        <button type="submit" className="signin-button">Login</button>
      </form>  
    </div>
  )
}

export default Signin