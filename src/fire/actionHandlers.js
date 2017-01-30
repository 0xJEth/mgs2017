import { cond, flow, nthArg, property, stubTrue } from 'lodash'
import { eq } from 'lodash/fp'
import { setKey } from 'cape-lodash'
import { clear, fieldValue } from 'redux-field'
import { selectAuthUser } from 'cape-redux-auth'
import { loginUser } from './handler'
import { entityUpdate, nextAction, triplePut } from './util'

export function handleAuth(firebase, store) {
  const { auth, googleAuth } = firebase
  // console.log(credential)
  return auth.signInWithPopup(googleAuth).then(flow(property('user'), loginUser(firebase, store)))
}
export function handleLogout({ auth }, action, next) {
  return auth.signOut().then(next(action))
}
export function handleProfileField(firebase, { dispatch, getState }, action, next) {
  next(action)
  const state = getState()
  const entity = setKey(fieldValue('profile', 'id')(state), selectAuthUser(state), action.payload)
  entityUpdate(firebase, entity).then(() => dispatch(clear('profile')))
}
export const isProfileField = flow(nthArg(2), property('meta.prefix[0]'), eq('profile'))
export const handleFieldSubmit = cond([
  [isProfileField, handleProfileField],
  [stubTrue, nextAction],
])
export function handleTriplePut(firebase, store, action, next) {
  next(action)
  triplePut(firebase, action)
}
