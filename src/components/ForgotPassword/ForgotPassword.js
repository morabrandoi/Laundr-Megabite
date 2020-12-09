import React, { useRef, useState } from "react"
import { TextField, Button, Card, Container } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'


export default function ForgotPassword() {

  const emailRef = useRef()

  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault()

    try {
        setMessage("")
        setError('')
        setLoading(true)
        await resetPassword(email)
        setMessage('Check your inbox for further instructions.')
    } catch {
      setError('Failed to send reset email')
    }
    setLoading(false)

  }

  return (
    <>
    <Container className="d-flex align-items-center justify-content-center"
      style={{minHeight: "60vh"}}>
      <div className="w-100" style={{maxWidth: "400px"}}>
        <Card>
            <h2 className="text-center mb-4">Password Reset</h2>
            {error && <Alert severity="error">{error}</Alert>}
            {message && <Alert severity="success">{message}</Alert>}
            <form onSubmit={ handleSubmit }>
              <TextField variant="standard" label="Email" required={true} value={email} onChange={(e)=>{e.preventDefault(); setEmail(e.target.value)}}/>
              <Button disabled={loading} className="w-100" type="submit">Reset Password</Button>
            </form>
            <div className="w-100 text-center mt-3">
              <Link to='/signin'>Sign In</Link>
            </div>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
        </div>
      </Container>
    </>
  )
}
