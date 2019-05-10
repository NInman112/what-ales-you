import React, { Component } from 'react'
import { getFavBeers } from '../actions/getFavBeers'
import { connect } from 'react-redux'


export class Favorites extends Component {
  state = {
    favs: Object.values(localStorage)
  }

  componentDidMount() {
    this.props.getFavBeers()
  }

  render() {
    const favBeers = this.props.favBeers.map((beer, i) => <li key={i}>{beer.name}</li>)

    return(
      <div>
        <p>Favorites!</p>
          <ul>{this.state.favs.map(beer =>
            <li key={JSON.parse(beer).id}>{JSON.parse(beer).name}</li>)}
          </ul>
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
