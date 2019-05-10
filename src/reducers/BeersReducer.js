export default function beersReducer(state = {
  beers: [],
  loading: false
}, action) {
  switch(action.type) {
    case 'LOADING_BEERS':
      return {...state, loading: true}
    case 'LOADED_BEERS':
      return {...state, loading: false, beers: action.payload}
    case 'ADD_BEERS':
      return {...state, loading: false, beers: action.payload}
    default:
      return state
  }
}
