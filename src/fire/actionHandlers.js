import { cond, flow, nthArg, property, stubTrue } from 'lodash'
import { eq } from 'lodash/fp'
import { login } from 'cape-redux-auth'
import { userFields } from './util'

export function nextAction(firebase, store, action, next) {
  return next(action)
}

export function handleAuth({ auth, googleAuth }, { dispatch }) {
  auth.signInWithPopup(googleAuth).then(({ user }) => {
    dispatch(login(userFields(user)))
    // console.log(credential)
  })
}
export function handleProfileField(firebase, store, action, next) {
  console.log(action.payload)
  return next(action)
}
export const isProfileField = flow(nthArg(2), property('meta.prefix[0]'), eq('profile'))
export const handleFieldSubmit = cond([
  [isProfileField, handleProfileField],
  [stubTrue, nextAction],
])
