import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteFavBeer } from '../actions/deleteFavBeer'
import '../stylesheets/list.css';

class DeleteFavorites extends Component {

  onClick = (e) => {
    e.preventDefault()
    this.props.deleteFavBeer(this.props.id)
  }

  render() {
    return(
      <button onClick={this.onClick} className='button'> Remove {this.props.name}</button>
    )
  }
}

export default connect(null, {deleteFavBeer})(DeleteFavorites)
