import { compose, createStore } from 'redux'

// The redux state sidebar thing store enhancer.
import DevTools from '../DevTools'

export default function createStoreDev(reducer, initState, middleware) {
  const store = createStore(
    reducer,
    initState,
    compose(
      middleware,
      DevTools.instrument()
    )
  )
  return store
}
