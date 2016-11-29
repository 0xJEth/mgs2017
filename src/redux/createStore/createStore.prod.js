import { createStore } from 'redux'

export default function createStoreProd(reducer, initState, middleware) {
  return createStore(reducer, initState, middleware)
}
