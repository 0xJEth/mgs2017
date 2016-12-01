import { curry, isEmpty, map } from 'lodash'
import { ENTITY_PUT, entityPut, ENTITY_PUTALL, getEntity } from 'redux-graph'
import { replaceDb } from 'cape-redux-reducer'
import { isAuthenticated, login, logout, setUserId } from 'cape-redux-auth'
import {
  authUsr, ensureIdType, entitySet,
  getChild, getDbEntity, getWatchChild, onChildChanged, userEntity,
} from './util'

export const loginUser = curry((firebase, { dispatch }, user) => {
  // console.log(pickBy(user, isString))
  const entity = userEntity(user)
  dispatch(login(authUsr(entity)))
  // entitySet(firebase, { ...entity, type: 'GoogleUser' })
  dispatch(entityPut({ ...entity, type: 'GoogleUser' }))
  return getDbEntity(firebase, entity)
  .then((dbEntity) => {
    if (!dbEntity) return entitySet(firebase, entity)
    return null
  })
})

export function handleAuth(firebase, store, fireUser) {
  const { dispatch, getState } = store
  if (fireUser) {
    if (fireUser.isAnonymous) {
      return dispatch(setUserId(fireUser.uid))
    }
    return loginUser(firebase, store, fireUser)
  }
  if (isAuthenticated(getState())) return dispatch(logout())
  return null
}

export const handleInit = curry(({ dispatch }, type, result) => {
  const payload = map(result, ensureIdType(type))
  if (isEmpty(payload)) return null
  return dispatch({ type: ENTITY_PUTALL, payload, meta: { sendSocket: false } })
})
export const handleChanged = curry(({ dispatch, getState }, typeId, change, key) => {
  const newVal = ensureIdType(typeId, change, key)
  const oldVal = getEntity(getState(), newVal)
  if (oldVal && newVal.dateModified === oldVal.dateModified) return null
  return dispatch({ type: ENTITY_PUT, payload: newVal })
})
export const typeLoader = curry(({ entity }, store, typeId) =>
  getChild(entity, typeId).then(handleInit(store, typeId))
)
export const typeListener = curry(({ entity }, store, typeId) =>
  onChildChanged(entity, typeId, handleChanged(store, typeId))
)
// Load init state and then listen for changes.
export const typeLoadWatch = curry((firebase, store, typeId) =>
  Promise.all([typeLoader(firebase, store, typeId), typeListener(firebase, store, typeId)])
)
export const dbChange = curry(({ dispatch }, result) => dispatch(replaceDb(result)))
export function dbChanges({ db }, store) {
  return getWatchChild(db, 'db', dbChange(store))
}
