import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from 'cape-redux-reducer'

import {
  getInitState,
  historyMiddleware,
  syncHistoryWithStore,
} from 'redux-history-sync'

/* global window */

const middleware = [
  historyMiddleware(window.history),
  // fireMiddleware(firebase),
  // socket,
  // cookieMiddleware,
  thunk,
]

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
    applyMiddleware(...middleware)
  )
  syncHistoryWithStore(store, window)
  // storeListener(store, firebase)
  return store
}
