import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerReducer } from 'react-router-redux'

import rootReducer from './reducers'

const middleware = [thunkMiddleware]

export default function configureStore(initialState) {
  let composedMiddleware

  if (process.env.NODE_ENV === 'production') {
    composedMiddleware = applyMiddleware(...middleware)
  } else {
    const devTools = window.devToolsExtension ?
      window.devToolsExtension() : f => f
    composedMiddleware = compose(applyMiddleware(...middleware), devTools)
  }

  const reducers = combineReducers({
    ...rootReducer,
    routing: routerReducer,
  })

  return createStore(reducers, initialState, composedMiddleware)
}
