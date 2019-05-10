export const getBeers = () => {
  return dispatch => {
    dispatch({type: "LOADING_BEERS"});
    return fetch('/beers')
      .then(response => response.json())
      .then(beers => dispatch({type: "LOADED_BEERS", payload: beers}))
  }
}
