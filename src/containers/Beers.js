import React from 'react'
import { connect } from 'react-redux'
import BeerList from '../components/BeerList'

class Beers extends React.Component {

  render() {
      return(
      <div>
        { this.props.loading ? <img src="spinner.gif" alt='loading-gif'/> : <BeerList beers={this.props.beers} /> }
      </div>
    )
  }
}

Beers.defaultProps = {beers: []}
function mapStateToProps(state) {
  return {
    beers: state.beersReducer.beers,
    loading: state.beersReducer.loading,
  }
}

export default connect(mapStateToProps)(Beers)
