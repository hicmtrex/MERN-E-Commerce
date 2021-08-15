import React, { useRef, useState } from "react"
import { useAuth } from "../../store/auth-context"
import { Link, useHistory } from "react-router-dom"
import classes from './AuthForm.module.css'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <section className={classes.auth}>
          <h1>Login</h1>
          {error && alert(error)}
      <form onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordRef} />
              </div>
        <div className={classes.actions}>
          <button disabled={loading}>Login</button>
        </div>
          </form>
          <div style={{marginTop:"30px"}}>
        Need an account? <Link to="/register" style={{textDecoration:"none"}}>Sign Up</Link>
      </div>
    </section>
  )
}