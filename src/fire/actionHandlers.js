import { cond, flow, nthArg, property, stubTrue } from 'lodash'
import { eq } from 'lodash/fp'
import { set } from 'cape-redux'
import { fieldValue } from 'redux-field'
import { selectAuthUser } from 'cape-redux-auth'
import { loginUser } from './handler'
import { nextAction } from './util'

export function handleAuth(firebase, store) {
  const { auth, googleAuth } = firebase
  // console.log(credential)
  return auth.signInWithPopup(googleAuth).then(flow(property('user'), loginUser(firebase, store)))
}
export function handleProfileField(firebase, { getState }, action, next) {
  const state = getState()
  const entity = set(fieldValue('profile', 'id')(state), selectAuthUser(state), action.payload)
  console.log(entity)
  next(action)
}
export const isProfileField = flow(nthArg(2), property('meta.prefix[0]'), eq('profile'))
export const handleFieldSubmit = cond([
  [isProfileField, handleProfileField],
  [stubTrue, nextAction],
])
