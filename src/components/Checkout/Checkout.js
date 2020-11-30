import React, { useState, useRef } from 'react'
import { CardElement } from '@stripe/react-stripe-js'
import { Form, Button, Card, Container, Alert, Col } from "react-bootstrap"
import { Link, useHistory } from 'react-router-dom'

export default function Checkout() {
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const addressLineOneRef = useRef()
    const addressLineTwoRef = useRef()
    const cityRef = useRef()
    const stateRef = useRef()
    const postalRef = useRef()
    const countryRef = useRef()
    
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
  
    async function handleSubmit(event) {
      event.preventDefault()
  
      try {
        setError('')
        setLoading(true)
        history.push('/')
      } catch {
        setError('Failed to sign in')
      }
      setLoading(false)
      
    }

    return (
        <>
        <Container className="d-flex align-items-center justify-content-center"
          style={{minHeight: "60vh"}}>
          <div className="w-100" style={{maxWidth: "800px"}}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Checkout</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={ handleSubmit }>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formFirstName">
                      <Form.Label>First Name *</Form.Label>
                      <Form.Control required placeholder="First Name" ref={firstNameRef} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formLastName">
                      <Form.Label>Last Name *</Form.Label>
                      <Form.Control required placeholder="Last Name" ref={lastNameRef} />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formAddress1">
                    <Form.Label>Address Line 1 *</Form.Label>
                    <Form.Control required placeholder="1234 Main St" ref={addressLineOneRef} />
                  </Form.Group>

                  <Form.Group controlId="formAddress2">
                    <Form.Label>Address Line 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" ref={addressLineTwoRef} />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formCity">
                      <Form.Label>City *</Form.Label>
                      <Form.Control required placeholder="City" ref={cityRef} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formState">
                      <Form.Label>State *</Form.Label>
                      <Form.Control required placeholder="State" ref={lastNameRef} />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formPostal">
                      <Form.Label>ZIP Code / Postal Code *</Form.Label>
                      <Form.Control required placeholder="ZIP Code / Postal Code" ref={postalRef} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formLastName">
                      <Form.Label>Country *</Form.Label>
                      <Form.Control required placeholder="Country" ref={countryRef} />
                    </Form.Group>
                  </Form.Row>
                  <CardElement
                      options={{
                          style: {
                          base: {
                              fontSize: '16px',
                              color: '#424770',
                              '::placeholder': {
                              color: '#aab7c4',
                              },
                          },
                          invalid: {
                              color: '#9e2146',
                          },
                          },
                      }}
                  />
                  <Button disabled={loading} className="w-100" type="submit">Pay</Button>
                </Form>
                
              </Card.Body>
            </Card>
            </div>
        </Container>

        </>
    )
}
