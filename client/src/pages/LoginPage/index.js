import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login (props) {

    return(
        <Container>
            <div>
                This is Login Page
            </div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={props.email}
                        onChange={(e) => props.setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password"
                        value={props.password}
                        onChange={(e) => props.setPassword(e.target.value)} 
                    />
                </Form.Group>

                <Button variant="primary" type="onClick" onClick={(e) => props.loginFormSubmit(e)}>
                    Login
                </Button>
                <Button variant="primary" type="onClick" href="/signup">
                    Sign Up
                </Button>
            </Form>
        </Container>
    )
}

export default Login;