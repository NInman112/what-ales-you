import React from 'react'
import { connect } from 'react-redux'
import fetchBeers from '../actions/fetchBeers'
import SaveFavorites from '../components/SaveFavorites'

class BeerList extends React.Component {

  render() {
    const beers = this.props.beers.map(beer =><li key={beer.id}>{beer.name}<SaveFavorites beer={{beer}}/></li>)
      return(
      <div>
        <ul>
          { this.props.loading ? <li>loading...</li> : beers }
        </ul>
        <p>Change to table to display beers?</p>
      </div>
    )
  }
}

BeerList.defaultProps = {beers: []}
function mapStateToProps(state) {
  return {
    beers: state.beersReducer.beers,
    loading: state.beersReducer.loading
  }
}

export default connect(mapStateToProps, {fetchBeers})(BeerList)
