import { combineReducers } from 'redux'
import beersReducer from './BeersReducer'
import favBeersReducer from './FavBeersReducer'

export default combineReducers({beersReducer, favBeersReducer})
