import React,{useState} from "react";
import { Container,Form,Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { handleLogin } from "../services/auth.service";

const Login = () => {

   const [username, setUsername] = useState('') 
   const [password, setPassword] = useState('')

   const history = useHistory()

  const onLogin = (e)=>{
        e.preventDefault()
        handleLogin(username,password).then(
            success=> {
                if(success){
                    history.push('/')
                }
            }
        )
  }


  return (
    <Container className="d-flex align-items-center my-5">
      <Form className="w-75 m-auto my-4">
        <h1>Login</h1>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter username" />
          <Form.Text className="text-muted">
            
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="remember">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" onClick={onLogin}>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
