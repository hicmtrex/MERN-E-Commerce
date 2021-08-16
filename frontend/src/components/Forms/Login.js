import React, { useRef, useState } from "react"
import { useAuth } from "../../store/auth-context"
import { Link, useHistory } from "react-router-dom"
import './AuthForm.css'

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
    <section className="auth">
          <h1>SIGN IN</h1>
          {error && alert(error)}
      <form onSubmit={handleSubmit}>
        <div className="control">
          <label htmlFor='email'>Email Adress</label>
          <input type='email' id='email' required ref={emailRef}
          placeholder="enter email"/>
        </div>
        <div className='control'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' required ref={passwordRef}
          placeholder="enter password" />
              </div>
        <div className='actions'>
          <button disabled={loading}>Sign In</button>
        </div>
          </form>
          <div style={{marginTop:"30px"}}>
          New Customare? <Link to="/register" style={{textDecoration:"none"}}>Sign Up</Link>
      </div>
    </section>
  )
}