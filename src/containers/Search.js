import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchBeers from '../actions/fetchBeers'
import '../stylesheets/Search.css';


class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.fetchBeers(this.state)
    this.setState({searchTerm: ''})
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
      return(
      <div className='inputContainer'>
        <form onSubmit={this.handleSubmit} >
          <input type='text' name='searchTerm' placeholder='Enter beer here' onChange={this.handleChange} value={this.state.searchTerm} className='inputBar'></input>
          <input type='submit' value='Search' className='inputButton'></input>
        </form>
      </div>
    )
  }
}

export default connect(null, {fetchBeers})(Search)
