export const getFavBeers = () => {
  return dispatch => {
    dispatch({type: "LOADING_FAV_BEERS"});
    return fetch('/beers')
      .then(response => response.json())
      .then(favBeers => dispatch({type: "LOADED_FAV_BEERS", payload: favBeers}))
  }
}
