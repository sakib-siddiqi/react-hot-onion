import { useState } from "react";
import { Col, Form, InputGroup, Row, Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Signup() {
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
    <Container>
      <Row className="mb-5">
        <Col xm={12} md={6} lg={4} className="mx-auto">
          <img
            src="/Images/logo2.png"
            alt=""
            className="w-50 mx-auto d-block mb-5"
          />
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Control
              required
              type="text"
              placeholder="Your Name"
              className="p-3  mb-4"
            />
            <Form.Control
              required
              type="email"
              placeholder="E-mail"
              className="p-3  mb-4"
            />
            <Form.Control
              required
              type="password"
              placeholder="Password"
              className="p-3  mb-4"
            />
            <Button
              type="submit"
              className="user-btn w-100 rounded-1 shadow-none p-3 mt-3"
            >
              Signup
            </Button>
            <NavLink className="mt-4 d-inline-block" to="/login">
              I have an account ...
            </NavLink>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default Signup;
