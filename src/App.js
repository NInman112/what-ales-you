import React, { Component  } from 'react';
import './stylesheets/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Navbar from './containers/Navbar'
import Home from './containers/Home'
import Favorites from './components/Favorites'
import About from './containers/About'
import { getBeers } from './actions'
// import Login from './components/Login'
// import SignupForm from './components/SignupForm'
// import Search from './components/Search'


class App extends Component {

  componentDidMount() {
    this.props.getBeers()
  }

  render(){
    const beers = this.props.beers.map((beer, i) => <li key={i}>{beer.name}</li>)

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
            {/*
            <Route path='/login' component={ Login } />
            <Route path='/signup' component={ SignupForm } />
            <Route path='/search' component={ Search } />
            */}
          </React.Fragment>
        </Router>
        <ul>
          { this.props.loading ? <li>loading...</li> : beers }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    beers: state.beersReducer.beers,
    loading: state.beersReducer.loading
  }
}

export default connect(mapStateToProps, { getBeers })(App);
