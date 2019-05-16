import axios from 'axios'
let URL = 'https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/search/?key=3fd23abd2ec6c5b7fb0b72b2410ce077&q='

const fetchBeers = (state) => {
  let NEW_URL = URL + state.searchTerm
  return(dispatch) => {
    dispatch({type: 'LOADING_BEERS'})
    return axios.get(NEW_URL)
    .then(response => response.data.data)
    .then(beerList => {
      return dispatch({type:'LOADED_BEERS', payload: beerList })
    })
  }
}

export default fetchBeers
