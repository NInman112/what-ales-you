import React from 'react'
import '../stylesheets/list.css';
import { connect } from 'react-redux'
import { deleteFavBeer } from '../actions/deleteFavBeer'

class DeleteFavorites extends React.Component {

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
