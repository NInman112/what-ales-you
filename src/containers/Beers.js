import React from 'react'
import { connect } from 'react-redux'
import BeerList from '../components/BeerList'
import '../stylesheets/App.css';


class Beers extends React.Component {

  render() {

      return(
      <div>
        { this.props.loading ? <p className='PTag'><img src='spinner.gif' alt='loading-gif'/></p> : <BeerList beers={this.props.beers} /> }
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
