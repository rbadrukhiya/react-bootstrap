// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';



// import Container from 'react-bootstrap/Container'; 
// import Row from 'react-bootstrap/Row'; 
// import Col from 'react-bootstrap/Col'; 

import {Col , Container , Row ,Form,Button,InputGroup} from 'react-bootstrap'

function App() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
    

    {/* <div className="container">helo</div> */}

    {/* <div className='container'>
      hello
    </div> */}

    <Container>

      <Row>
        <Col className='bg-warning'sm={6} md={6} xl={6} lg={6} xs={6} >hello</Col>
        <Col  >good</Col>
        <Col  >morning</Col>
      </Row>
          </Container>

          {/* <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}



<Container>
<Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </Container>



    
    {/* <div className="container">
      <div className="row">
        <div className="col-6">hello</div>
        <div className="col">hello</div>
        <div className="col">hello</div>

      </div> */}

      <Container>
        <Row className='bg-alert  text-center p-0 m-0'  xl={4} lg={3} md={2} sm={1}>
          <Col >
          <div className='bg-secondary'>
            <p>hello Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio commodi quos maxime mollitia alias veritatis molestias accusamus error quidem? Eum culpa enim dolores aspernatur blanditiis animi voluptatibus non ut nobis.</p>
          </div>
          </Col>
          <Col>
          <div className='bg-secondary'>
            <p>hello</p>
          </div>
          </Col><Col>
          <div className='bg-secondary'>
            <p>hello</p>
          </div>
          </Col><Col>
          <div className='bg-secondary'>
            <p>hello</p>
          </div>
          </Col>
        </Row>
      </Container>
  


      <Accordion defaultActiveKey="0" className='col-2'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  );
}

export default App;
