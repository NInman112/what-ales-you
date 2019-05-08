import React, { Component } from 'react'

export default class Search extends Component {
  
  state = {
    searchTerm: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <div>
      <p>Search!</p>
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='searchTerm' placeholder='Search' handleChange={this.handleChange}></input>
        <input type='submit' value='Search'></input>
      </form>
      </div>
    )
  }
}
