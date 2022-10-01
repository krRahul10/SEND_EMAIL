import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Alert from 'react-bootstrap/Alert';

const Home = () => {
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  // console.log(email);

  const sendEmail = async(e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8006/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email})
    })

    const data = await res.json()

    if(data.status ===401 || !data){
      console.log("error")
    }else{
    console.log("Email Sent Successfully");
    setShow(true)
    setEmail("")
    }

  };

  return (
    <div>
      {
        show ? <Alert variant="warning" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert> :""
      }
      <div className="container mt-2">
        <div className="d-flex justify-content-center">
          <h2>Send Email With React & NodeJs</h2>
          <img
            src="/gmail.webp"
            alt="gmail Photot"
            style={{ width: "90px", height: "79px", marginTop: "-20px" }}
          />
        </div>
        <div className="d-flex justify-content-center">
          <Form className="mt-2 col-lg-6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Your Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Button variant="warning" type="submit" onClick={sendEmail}>
              SEND
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Home;
