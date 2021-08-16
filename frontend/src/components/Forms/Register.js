import React, { useRef, useState } from "react"
import { useAuth } from "../../store/auth-context"
import {  Link, useHistory } from "react-router-dom"
import './AuthForm.css'

export default function Register() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <section className='auth'>
      <h1>SIGN UP</h1>
      {error && alert(error)}
      <form onSubmit={handleSubmit}>
        <div className='control'>
          <label htmlFor='email'>Email Adress</label>
          <input type='email' id='email' required ref={emailRef}
          placeholder="enter email"/>
        </div>
        <div className='control'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' required ref={passwordRef}
          placeholder="enter password" />
              </div>
              <div className='control'>
          <label htmlFor='password'>Confirm Password</label>
          <input type='password' id='password' required ref={passwordConfirmRef}
          placeholder="confirm password" />
        </div>
        <div className='actions'>
          <button disabled={loading}>Sing Up</button>
        </div>
      </form>
      <div style={{marginTop:"30px"}}>
          have an account? <Link to="/login" style={{textDecoration:"none"}}>Sign In</Link>
      </div>
    </section>
  );
};

