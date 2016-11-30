import { curry, isEmpty, map } from 'lodash'
import { ENTITY_PUT, ENTITY_PUTALL, getEntity } from 'redux-graph'
import { replaceDb } from 'cape-redux-reducer'
import { login } from 'cape-redux-auth'
import {
  authUsr, ensureIdType, entitySet,
  getChild, getDbEntity, getWatchChild, onChildChanged, userEntity,
} from './util'
// import { authUsr, entitySet, getEntity, nextAction, userEntity } from './util'

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
export const loginUser = curry((firebase, { dispatch }, user) => {
  const entity = userEntity(user)
  dispatch(login(authUsr(entity)))
  return getDbEntity(firebase, entity)
  .then((dbEntity) => {
    if (!dbEntity) return entitySet(firebase, entity)
    return null
  })
})
