import React from 'react'
import { connect } from 'react-redux'
import { addFavBeer } from '../actions/addFavBeer'

class SaveFavorites extends React.Component {

  onClick = (e) => {
    e.preventDefault()
    this.props.addFavBeer(this.props.beer.beer)
  }

  render() {
    return(
      <button onClick={this.onClick}>Save Favorite</button>
    )
  }
}

export default connect(null, {addFavBeer})(SaveFavorites)
