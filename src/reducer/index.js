import { combineReducers } from 'redux'
import CinemaReducer from './reducers'

export default combineReducers({
    dataCinema: CinemaReducer,
})
