import React, { useState, useEffect } from 'react';
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

  //hooks for login form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //useEffect to update state to switch between loggedin/out?
  // useEffect(() => {
  //   isLoggedIn();
  // })


  // Login Function
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
      if(results.data.loggedIn){
        //console.log("userLogin route returned to front end!!!");
        return (
          isLoggedIn(results.data.loggedIn),
          //looking for a true value for line46
          console.log(loggedIn)
        // window.location.href = '/';
        // console.log(loggedIn);
        )
      }      
      
    }).catch(error => {
      if (error) throw error;
    })
  }

  //function to check login state
  const isLoggedIn = (loginFlag) => {
    if(!loggedIn){
      console.log(loginFlag)
      return (
        setLoggedIn(loginFlag),
        console.log(loggedIn)
      );
    } else {
      console.log("not logged in or already logged in")
    }
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
        <Route path='/' exact component={ loggedIn ? Homepage : Login} />
      </Switch>
    </Router>
  );
}

export default App;
