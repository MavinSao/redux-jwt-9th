import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { handleRegister } from "../services/auth.service";

const SignUp = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const onSignUp = (e) => {
    e.preventDefault();
    handleRegister(fullname, username, password).then((success) => {
      if (success) {
        history.push("/login");
      }
    });
  };

  return (
    <Container>
      <Container className="d-flex align-items-center my-5">
        <Form className="w-75 m-auto my-4">
          <h1>Sign Up</h1>
          <Form.Group className="mb-3" controlId="fullname">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              type="text"
              placeholder="Enter full name"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter username"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" onClick={onSignUp}>
            Sign Up
          </Button>
        </Form>
      </Container>
    </Container>
  );
};

export default SignUp;
