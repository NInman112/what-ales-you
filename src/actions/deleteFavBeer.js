import { getFavBeers } from './getFavBeers'

export const deleteFavBeer = (id) => {
  return dispatch => {
    dispatch({type: "DELETE_FAV_BEERS"});
    return fetch('/beers/' + id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      dispatch(getFavBeers())
    })
  }
}
