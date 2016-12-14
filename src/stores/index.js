import {createStore,combineReducers,applyMiddleware} from 'redux'
import * as reducer from '../reducers'
import thunk from 'redux-thunk'

var store = createStore(
	combineReducers(reducer),
	applyMiddleware(thunk)
)

export default store