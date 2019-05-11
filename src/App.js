import React, { Component  } from 'react';
import './stylesheets/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './containers/Navbar'
import Home from './containers/Home'
import Favorites from './components/Favorites'
import About from './containers/About'
import FlexView from 'react-flexview'

class App extends Component {

  render(){
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
            <React.Fragment>
              <Navbar />
              <Route exact path='/' component={ Home } />
              <Route path='/favorites' component={ Favorites } />
              <Route path='/about' component={ About } />
            </React.Fragment>
          </Router>
      </div>
    )
  }
}

export default App;
