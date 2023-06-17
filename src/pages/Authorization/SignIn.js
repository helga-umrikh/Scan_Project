import React, { useState } from 'react';
import './Authorization.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

function SignIn() {

  //state variable for each input
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [isFormValid, setFormValidity] = useState(false)

  const handleLoginChange = (event) => {
    setLogin(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form submitted')
  }

  //check for values
  const isInputValid = () => {
    return login !== ''&& password !== ''
  }

  const handleFormValidity = () => {
    setFormValidity(isInputValid())
  }

  return (
    <div className='sign-in'>
      <Form className='rounded p-4 p-sm-3' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Логин или номер телефона:</Form.Label>
          <Form.Control type="text" onChange={handleLoginChange} onBlur={handleFormValidity} />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Пароль:</Form.Label>
          <Form.Control type="password" onChange={handlePasswordChange} onBlur={handleFormValidity}/>
        </Form.Group>
        <Button variant='primary' type='submit' disabled={isFormValid}>Войти</Button>
      </Form>
    </div>
  )
}

export default SignIn