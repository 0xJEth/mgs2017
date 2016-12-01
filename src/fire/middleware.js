import { isFunction } from 'lodash'
import { SUBMIT } from 'redux-field'
import { AUTH, LOGOUT } from './actions'
import { handleAuth, handleFieldSubmit, handleLogout } from './actionHandlers'

export const dispatcher = {
  [AUTH]: handleAuth,
  [LOGOUT]: handleLogout,
  [SUBMIT]: handleFieldSubmit,
}

export default function listMiddleware(firebase) {
  return store => next => (action) => {
    if (!action.type) return next(action)
    if (isFunction(dispatcher[action.type])) {
      return dispatcher[action.type](firebase, store, action, next)
    }
    return next(action)
  }
}
