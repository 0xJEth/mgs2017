import { partial } from 'lodash'
import { dbChanges, handleAuth, typeLoadWatch } from './handler'

export default function storeListener(firebase, store) {
  const loadWatchType = typeLoadWatch(firebase, store)
  firebase.auth.onAuthStateChanged(partial(handleAuth, firebase, store))
  dbChanges(firebase, store)
  loadWatchType('Person')
  loadWatchType('Program')
  loadWatchType('Student')
  return store
}
