import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/' exact component={Homepage} />
      <Route path='/login' exact component={Login} />
      <Route path='/signup' exact component={Signup} />
    </Router>
  );
}

export default App;
