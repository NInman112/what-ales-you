import React, { Component } from 'react'
import { getFavBeers } from '../actions/getFavBeers'
import DeleteFavorites from './DeleteFavorites'
import { connect } from 'react-redux'

export class Favorites extends Component {

  componentDidMount() {
    this.props.getFavBeers()
  }

  render() {
    const favBeers = this.props.favBeers && this.props.favBeers.map((beer, i) =>
      <li key={i}>
        {beer.name}<DeleteFavorites id={beer.id}/>
      </li>)
    return(
      <div>
        <p>Favorites!</p>
          <ul>
            { this.props.loading ? <li>loading...</li> : favBeers }
          </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    favBeers: state.favBeersReducer.favBeers,
    loading: state.favBeersReducer.loading
  }
}

export default connect(mapStateToProps, { getFavBeers })(Favorites);
