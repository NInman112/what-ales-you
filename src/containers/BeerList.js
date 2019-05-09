import React from 'react'
import { connect } from 'react-redux'
import fetchBeers from '../actions/fetchBeers'

class BeerList extends React.Component {
  render() {
      return(
      <div>
        <ul>{this.props.beers.map(beer => <li key={beer.id}>{beer.name}</li>)}</ul>
      </div>
    )
  }
}

BeerList.defaultProps = {beers: []}

function mapStateToProps(state) {
  return {
    beers: state.beersReducer.beers
  }
}

export default connect(mapStateToProps, {fetchBeers})(BeerList)
