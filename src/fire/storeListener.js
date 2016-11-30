import { partial } from 'lodash'
import { setUserId } from 'cape-redux-auth'
import { dbChanges, loginUser, typeLoadWatch } from './handler'

function handleAuth(firebase, store, fireUser) {
  if (fireUser) {
    if (fireUser.isAnonymous) {
      return store.dispatch(setUserId(fireUser.uid))
    }
    return loginUser(firebase, store, fireUser)
  }
  return null
}

export default function storeListener(firebase, store) {
  const loadWatchType = typeLoadWatch(firebase, store)
  firebase.auth.onAuthStateChanged(partial(handleAuth, firebase, store))
  dbChanges(firebase, store)
  loadWatchType('Person')
  return store
}
