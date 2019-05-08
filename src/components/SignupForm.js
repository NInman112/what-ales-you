import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SignupForm extends Component {

  render() {
    return(
      <div>
        <p>Signup!</p>
      <form>
        <input type='text' value='Name'></input>
        <input type='text' value='Password'></input>
        <input type='submit'></input>
      </form>
      <p>Already have an account? <Link to='/LoginForm'>Login here!</Link></p>
      </div>
    )
  }
}
