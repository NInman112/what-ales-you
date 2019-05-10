import React, { Component } from 'react'

export default class SaveFavorites extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beer: ''
    }
  }

  onClick = (e) => {
    e.preventDefault()
    localStorage.setItem(this.props.beer.beer.id, JSON.stringify(this.props.beer.beer))
    console.log(this.props.beer.beer)
  }

  render() {
    return(
        <button onClick={this.onClick}>Save Favorite</button>
      )
  }
}
