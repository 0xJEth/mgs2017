import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from 'cape-redux-reducer'
import { createSizeAction, listenSize } from 'redux-windowsize'

import {
  getInitState,
  historyMiddleware,
  syncHistoryWithStore,
} from 'redux-history-sync'

import * as firebase from '../fire'
import fireMiddleware from '../fire/middleware'
import storeListener from '../fire/storeListener'

/* global window */

const middleware = [
  historyMiddleware(window.history),
  fireMiddleware(firebase),
  // socket,
  // cookieMiddleware,
  thunk,
]
/* eslint-disable no-underscore-dangle */
const composeEnhancers = (
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose
/* eslint-enable */

// Configure and create Redux store.
// Function requires an initialState object.
export default function configureStore(initialState) {
  const calculatedState = {
    history: getInitState(window.location, window.document.title, window.history),
    session: {
      currentYear: new Date().getFullYear(),
    },
  }
  // const initState = merge(initialState, calculatedState)
  const store = createStore(
    reducer,
    calculatedState,
    composeEnhancers(
      applyMiddleware(...middleware),
    )
  )
  syncHistoryWithStore(store, window)
  storeListener(firebase, store)
  store.dispatch(createSizeAction(window))
  listenSize(store.dispatch, window)
  return store
}
