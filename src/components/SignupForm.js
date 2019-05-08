import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SignupForm extends Component {

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
        <p>Signup!</p>
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='username' placeholder='Name' handleChange={this.handleChange}></input>
        <input type='text' name='password' placeholder='Password' handleChange={this.handleChange}></input>
        <input type='submit'></input>
      </form>
      <p>Already have an account? <Link to='/LoginForm'>Login here!</Link></p>
      </div>
    )
  }
}
