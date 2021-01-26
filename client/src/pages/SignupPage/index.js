import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import API from '../../utils/API';

function Signup(props) {

    //setup hooks
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const signupFormSubmit = (event) => {
        //stop form from submitting
        event.preventDefault();

        //setup user data payload
        const userPayload = {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        }

        console.log(userPayload);

        if(password === confirmPassword) {

            //use hooks to clear values
            setEmail('');
            setFirstName('');
            setLastName('');
            setPassword('');
            setConfirmPassword('');

            //console.log(userPayload);
            API.userSignup(userPayload).then( results => {
                console.log("userSignup route returned to front end!!!");
            }).catch( error => {
                if(error) throw error;
            })
        } else {
            console.log("passwords do not match")
            //add alert here
        }
        

    }

    return (
        <Container>
            <div>
                This is Signup Page
            </div>
            <Form onSubmit={signupFormSubmit}>
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

                <Form.Group controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="First Name"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)} 
                    />
                </Form.Group>

                <Form.Group controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)} 
                    />
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

                <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)} 
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign up
                </Button>

                <Button variant="primary" type="onClick" href="/">
                    Login
                </Button>
            </Form>
        </Container>
    )
}

export default Signup;