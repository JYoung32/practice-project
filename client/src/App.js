import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/' exact component={Homepage} />
    </Router>
  );
}

export default App;
