import React, { useRef, useState } from "react"
import { TextField, Button, Card, Container } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import styles from './styles.module.css'

export default function SignIn() {

  const emailRef = useRef()
  const passwordRef = useRef()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      setError('')
      setLoading(true)
      await signIn(email, password)
      history.push('/')
    } catch {
      setError('Failed to sign in')
    }
    setLoading(false)

  }

  return (
      <div className={styles.Wrapper}>
        <Card className={styles.Card}>
            <h2>Sign In</h2>
            {error && <Alert severity="error">{error}</Alert>}
              <form onSubmit={ handleSubmit } className={styles.Form}>
                <TextField variant="standard" label="Email" required={true} value={email} onChange={(e)=>{e.preventDefault(); setEmail(e.target.value)}}/>
                <TextField variant="standard" label="Password" required={true} value={password} onChange={(e)=>{e.preventDefault(); setPassword(e.target.value)}}/>
                <div className={styles.ButtonWrapper}>
                  <Button variant="outlined" disabled={loading} className={styles.SignButton} type="submit">Sign In</Button>
                </div>
              </form>
            <div className="w-100 text-center mt-3">
              <Link to='/forgot-password'>Forgot Password?</Link>
            </div>
        </Card>
        <div className={styles.SignUp}>
          <h4>Need an account?</h4>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
  )
}
