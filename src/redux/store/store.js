import reducers from '../reducers/rootReducer'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middleWare = [thunk, logger]

const store = createStore(reducers, {}, applyMiddleware(...middleWare))

export default store