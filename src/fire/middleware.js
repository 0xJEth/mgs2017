import { isFunction } from 'lodash'
import { AUTH } from './actions'
import { handleAuth } from './actionHandlers'

export const dispatcher = {
  [AUTH]: handleAuth,
}

export default function listMiddleware(firebase) {
  return store => next => (action) => {
    console.log(action)
    if (!action.type) return next(action)
    if (isFunction(dispatcher[action.type])) {
      return dispatcher[action.type](firebase, store, action, next)
    }
    return next(action)
  }
}
