import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFavBeer } from '../actions/addFavBeer'
import { getFavBeers } from '../actions/getFavBeers'
import '../stylesheets/list.css';

class SaveFavorites extends Component {
  state = {
    buttonText: 'Save Favorite',
    isButtonDisabled: false
  }

  componentDidMount() {
    this.props.getFavBeers()
  }

  componentWillReceiveProps() {
    this.props.favBeers.map((beer) =>
      (beer.name === this.props.beer.name ? (
        this.setState({isButtonDisabled: true, buttonText: 'In Favorites'})
      ) : (''))
    )
  }

  onClick = (e) => {
    e.preventDefault()
    this.props.addFavBeer(this.props.beer)
    this.setState({buttonText:'Saved!'})
    this.setState({isButtonDisabled: true})
  }

  render() {
    return(
      <button onClick={this.onClick} disabled={this.state.isButtonDisabled} className='button'>{this.state.buttonText}</button>
    )
  }
}

const mapStateToProps = state => {
  return {
    favBeers: state.favBeersReducer.favBeers,
    loading: state.favBeersReducer.loading
  }
}

export default connect(mapStateToProps, {addFavBeer, getFavBeers})(SaveFavorites)
