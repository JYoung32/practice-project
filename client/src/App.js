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

  //hooks for login form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Login Function
  const loginFormSubmit = (e) => {
    //stop form from submitting
    e.preventDefault();

    //setup user data payload
    const userPayload = {
      email: email,
      password: password
    }

    //console.log(userPayload);
    API.userLogin(userPayload).then(results => {
      console.log(results);
      if(results.data.loggedIn){
        //if the use successfully logs in, set loggedIn state to true
        return isLoggedIn(results.data.loggedIn)
      }      
    }).catch(error => {
      if(error) throw error;
    })
  }

  //function to check login state
  const isLoggedIn = (loginFlag) => {
    if(!loggedIn){
      return setLoggedIn(loginFlag)
    } else {
      console.log("not logged in")
    }
  }

  return (
    <Router>
      <Navbar loggedIn={loggedIn}/>
      <Switch>
        {/* <Route 
          path='/login' 
          render={() => <Login
            loginFormSubmit={loginFormSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword} />
          } 
        /> */}
        <Route path='/signup' render={() => <Signup />} />
        <Route 
          path='/' 
          render={ loggedIn ? 
          () => <Homepage /> : (props) => <Login {...props} 
            loginFormSubmit={loginFormSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword} /> 
          } 
        />
      </Switch>
    </Router>
  );
}

export default App;
