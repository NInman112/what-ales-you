import React, { Component } from 'react'

export default class SignupForm extends Component {

  render() {
    return(
      <div>
      <form>
        <input type='text' value='Name'></input>
        <input type='text' value='Password'></input>
        <input type='text' value='Verify Password'></input>
        <input type='submit'></input>
      </form>
      <p>Already have an account? <Link to='/LoginForm'>Login here!</Link></p>
      </div>
    )
  }
}
