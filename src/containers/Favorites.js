import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFavBeers } from '../actions/getFavBeers'
import FavoriteList from '../components/FavoriteList'

class Favorites extends Component {

  componentDidMount() {
    this.props.getFavBeers()
  }

  render() {
    const noFavs = this.props.favBeers && this.props.favBeers.length === 0 ? "You haven't saved any favorites!" : ''
    return(
      <div>
        <br></br>
        { noFavs }
        { <FavoriteList beers={this.props.favBeers} /> }
      </div>
    )
  }
}

Favorites.defaultProps = {favBeers: []}
const mapStateToProps = state => {
  return {
    favBeers: state.favBeersReducer.favBeers,
    loading: state.favBeersReducer.loading
  }
}

export default connect(mapStateToProps, { getFavBeers })(Favorites);
