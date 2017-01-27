import { isFunction } from 'lodash'
import { SUBMIT } from 'redux-field'
import { AUTH, LOGOUT, SAVE_STUDENT_SHOW } from './actions'
import { handleAuth, handleFieldSubmit, handleLogout, handleStudentShow } from './actionHandlers'

export const dispatcher = {
  [AUTH]: handleAuth,
  [LOGOUT]: handleLogout,
  [SAVE_STUDENT_SHOW]: handleStudentShow,
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
