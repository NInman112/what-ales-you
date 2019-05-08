import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LoginForm extends Component {

  render() {
    return(
      <div>
      <form>
        <input type='text' value='Name'></input>
        <input type='text' value='Password'></input>
        <input type='submit'></input>
      </form>
      <p>Dont have an account? <Link to='/SignupForm'>Sign up here!</Link></p>
      </div>
    )
  }
}
