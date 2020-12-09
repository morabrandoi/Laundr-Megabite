import React, { useRef, useState } from "react"
import { TextField, Button, Card, Container } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import styles from './styles.module.css'

export default function SignUp() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signUp } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  async function handleSubmit(event) {
    event.preventDefault()

    if (password !== passwordConfirmation) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signUp(email, password)
      history.push('/')
    } catch {
      setError('Failed to sign up')
    }
    setLoading(false)

  }

  return (
    <div className={styles.Wrapper}>
      <Card className={styles.Card}>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={ handleSubmit } className={styles.Form}>
            <div className={styles.email}>
              <TextField className={styles.Field} variant="standard" label="Email" required={true} value={email} onChange={(e)=>{e.preventDefault(); setEmail(e.target.value)}}/>
            </div>
            <div className={styles.Password}>
              <TextField className={styles.Field2} variant="standard" label="Password" required={true} value={password} onChange={(e)=>{e.preventDefault(); setPassword(e.target.value)}}/>
              <TextField className={styles.Field3} style={{marginLeft:"10px"}} variant="standard" label="Password Confirmation" required={true} value={passwordConfirmation} onChange={(e)=>{e.preventDefault(); setPasswordConfirmation(e.target.value)}}/>
            </div>
            <div className={styles.ButtonWrapper}>
              <Button variant="contained" color="primary" disabled={loading} className={styles.SignButton} type="submit">Sign Up</Button>
            </div>
          </form>
      </Card>
      <div className={styles.SignIn}>
        Already have an account? <Link to='signin'>Sign In</Link>
      </div>
    </div>
  )
}
