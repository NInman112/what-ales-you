import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LoginForm extends Component {

  state = {
    username: '',
    password: ''
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
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='username' placeholder='Name' onChange={this.handleChange}></input>
        <input type='text' name='password' placeholder='Password' onChange={this.handleChange}></input>
        <input type='submit'></input>
      </form>
      <p>Dont have an account? <Link to='/SignupForm'>Sign up here!</Link></p>
      </div>
    )
  }
}
