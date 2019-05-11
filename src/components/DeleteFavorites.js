import React from 'react'
import { connect } from 'react-redux'
import { deleteFavBeer } from '../actions/deleteFavBeer'

class DeleteFavorites extends React.Component {

  onClick = (e) => {
    e.preventDefault()
    this.props.deleteFavBeer(this.props.id)
  }

  render() {
    return(
      <button onClick={this.onClick}>Delete</button>
    )
  }
}

export default connect(null, {deleteFavBeer})(DeleteFavorites)
