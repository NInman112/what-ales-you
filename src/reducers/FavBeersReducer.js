export default function favBeersReducer(state = {
  favBeers: [],
  loading: false
}, action) {
  switch(action.type) {
    case 'LOADING_FAV_BEERS':
      return {...state, loading: true}
    case 'LOADED_FAV_BEERS':
      return {...state, loading: false, favBeers: action.payload}
    case 'ADD_FAV_BEERS':
      return {...state, loading: false, favBeers: action.payload}
    default:
      return state
  }
}
