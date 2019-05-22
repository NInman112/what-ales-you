import React, { Component  } from 'react';
import './stylesheets/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Favorites from './containers/Favorites'
import About from './components/About'

class App extends Component {

  render(){
    console.log(REACT_APP_API_KEY)
    return (
        <div className="App">
          <table className='titleBar'>
            <tbody>
              <tr>
                <td>
                  <img width='75' src="beer.svg" alt='beer-icon'/>
                </td>
                <td width='16'></td>
                <td>
                  <h1>What Ales You?</h1>
                </td>
              </tr>
            </tbody>
          </table>
          <Router>
            <Navbar />
            <Route exact path='/' component={ Home } />
            <Route path='/favorites' component={ Favorites } />
            <Route path='/about' component={ About } />
          </Router>
      </div>
    )
  }
}

export default App;
