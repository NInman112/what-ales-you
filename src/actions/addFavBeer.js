export const addFavBeer = (data) => {
  return dispatch => {
    dispatch({type: "ADD_FAV_BEERS"});
    return fetch('/beers', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        description: data.style.description,
        ibuMin: data.style.ibuMin,
        ibuMax: data.style.ibuMax,
        abvMin: data.style.abvMin,
        abvMax: data.style.abvMax,
        avaible: data.isretired
      })
    })
  }
}
