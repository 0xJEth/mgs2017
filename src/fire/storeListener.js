import { partial } from 'lodash'
import { login, setUserId } from 'cape-redux-auth'
import { userFields } from './util'
import { dbChanges } from './handler'

function handleAuth(firebase, { dispatch }, fireUser) {
  if (fireUser) {
    if (fireUser.isAnonymous) {
      return dispatch(setUserId(fireUser.uid))
    }
    return dispatch(login(userFields(fireUser)))
  }
  return null
}

export default function storeListener(store, firebase) {
  firebase.auth.onAuthStateChanged(partial(handleAuth, firebase, store))
  dbChanges(firebase, store)
  return store
}
