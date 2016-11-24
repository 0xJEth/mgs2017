import { isFunction } from 'lodash'

export const dispatcher = {

}
export default function listMiddleware(firebase) {
  return store => next => (action) => {
    if (!action.type) return next(action)
    if (isFunction(dispatcher[action.type])) {
      return dispatcher[action.type](store, action, firebase, next)
    }
    return next(action)
  }
}
