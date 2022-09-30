import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Home = () => {

    const [email,setEmail] = useState("")
    console.log(email)


  return (
    <div>
      <div className='container mt-2'>
        <div className='d-flex justify-content-center'>
            <h2>Send Email With React & NodeJs</h2>
            <img src="/gmail.webp" alt="gmail Photot" style={{width:"90px" , height:"79px", marginTop:"-20px"}}  />
        </div>
        <div className='d-flex justify-content-center'>
        <Form className='mt-2 col-lg-6'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Your Email Address</Form.Label>
        <Form.Control type="email" name='email' onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

     
      <Button variant="warning" type="submit">
        SEND
      </Button>
    </Form>
        </div>
      </div>
    </div>
  )
}

export default Home
