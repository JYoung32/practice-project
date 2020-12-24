import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import API from '../../utils/API';

function Login (props) {

    //setup hooks
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginFormSubmit = (event) => {
        //stop form from submitting
        event.preventDefault();

        //use hooks to set state
        setEmail('');
        setPassword('');

        //setup user data payload
        const userPayload = {
            email: email,
            password: password
        }

        //console.log(userPayload);
        API.userLogin(userPayload).then( results => {
            console.log("userLogin route returned to front end!!!");
        }).catch( error => {
            if(error) throw error;
        })

    }

    return(
        <Container>
            <div>
                This is Login Page
            </div>
            <Form onSubmit={loginFormSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
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
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} 
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Login;