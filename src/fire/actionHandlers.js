import { cond, flow, nthArg, property, stubTrue } from 'lodash'
import { eq } from 'lodash/fp'
import { loginUser } from './handler'
import { nextAction } from './util'

export function handleAuth(firebase, store) {
  const { auth, googleAuth } = firebase
  // console.log(credential)
  return auth.signInWithPopup(googleAuth).then(flow(property('user'), loginUser(firebase, store)))
}
export function handleProfileField(firebase, store, action, next) {
  next(action)
}
export const isProfileField = flow(nthArg(2), property('meta.prefix[0]'), eq('profile'))
export const handleFieldSubmit = cond([
  [isProfileField, handleProfileField],
  [stubTrue, nextAction],
])
