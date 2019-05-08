import React, { Component } from 'react'

export default class Search extends Component {

  render() {
    return(
      <div>
      <p>Search!</p>
      <form>
        <input type='text' placeholder='Search'></input>
        <input type='submit' value='Search'></input>
      </form>
      </div>
    )
  }
}
