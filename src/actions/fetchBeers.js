import axios from 'axios'

let URL = 'https://sandbox-api.brewerydb.com/v2/search/?key='+ process.env.REACT_APP_API_KEY +'&q='

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
