import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';
import API from './utils/API';

const App = () => {

  //setup hook for log in
  const [loggedIn, setLoggedIn] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginFormSubmit = (e) => {
    //stop form from submitting
    e.preventDefault();

    console.log(loggedIn);

    //setup user data payload
    const userPayload = {
      email: email,
      password: password
    }

    //console.log(userPayload);
    API.userLogin(userPayload).then(results => {
      console.log(results);
      if(results.status === 200){
        console.log("userLogin route returned to front end!!!");
        setLoggedIn(true);
        console.log(loggedIn);
      }
      
      //setLoggedIn(true);
      
      //window.location.href = '/';
    }).catch(error => {
      if (error) throw error;
    })
  }

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/login' render={() =>
          <Login
            loginFormSubmit={loginFormSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword} />
        } />
        <Route path='/signup' render={() => <Signup />} />
        <Route path='/' exact component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
