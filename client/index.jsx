import React from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import { Router } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'

import getRoutes from '../common/routes'
import rootReducer from '../common/reducers'

const initialState = window.__INITIAL_STATE__ || {}

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(rootReducer, initialState)
const history = createHistory()

syncReduxAndRouter(history, store)

render(
  <Provider store={store}>
    <Router history={history}>
      {getRoutes(store)}
    </Router>
  </Provider>,
  document.getElementById('root')
)
