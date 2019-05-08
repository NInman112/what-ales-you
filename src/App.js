import React from 'react';
import './stylesheets/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import SignupForm from './components/SignupForm'

import Search from './components/Search'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <h3>What Ales You?</h3>
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path='/' component={ Home } />
          <Route path='/login' component={ Login } />
          <Route path='/signup' component={ SignupForm } />
          <Route path='/search' component={ Search } />
          <Route path='/about' component={ About } />
        </React.Fragment>
      </Router>
    </div>
  )
}

export default App;
