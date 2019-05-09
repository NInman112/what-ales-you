import React from 'react';
import './stylesheets/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './containers/Navbar'
import Home from './containers/Home'
import Favorites from './components/Favorites'
// import Login from './components/Login'
// import SignupForm from './components/SignupForm'
// import Search from './components/Search'
import About from './containers/About'

function App() {
  return (
    <div className="App">
      <table className='titleBar'>
        <tbody>
          <tr>
            <td>
              <img width='75' src="beer.svg"/>
            </td>
            <td width='16'></td>
            <td>
              <h1>What Ales You?</h1>
            </td>
          </tr>
        </tbody>
      </table>

      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path='/' component={ Home } />
          <Route path='/favorites' component={ Favorites } />
          <Route path='/about' component={ About } />
          {/*
          <Route path='/login' component={ Login } />
          <Route path='/signup' component={ SignupForm } />
          <Route path='/search' component={ Search } />
          */}
        </React.Fragment>
      </Router>
    </div>
  )
}

export default App;
