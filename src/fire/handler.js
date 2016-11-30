import { curry, isEmpty, map } from 'lodash'
import { ENTITY_PUTALL } from 'redux-graph'
import { replaceDb } from 'cape-redux-reducer'
import { login } from 'cape-redux-auth'
import {
  ensureIdType, entitySet, getChild, getEntity, getWatchChild, userEntity,
} from './util'
// import { authUsr, entitySet, getEntity, nextAction, userEntity } from './util'

export const handleInit = curry(({ dispatch }, type, result) => {
  const payload = map(result, ensureIdType(type))
  if (isEmpty(payload)) return null
  return dispatch({ type: ENTITY_PUTALL, payload, meta: { sendSocket: false } })
})
export const typeLoader = curry((store, { entity }, typeId) =>
  getChild(entity, typeId).then(handleInit(store, typeId))
)
export const dbChange = curry(({ dispatch }, result) => dispatch(replaceDb(result)))
export function dbChanges({ db }, store) {
  return getWatchChild(db, 'db', dbChange(store))
}
export const loginUser = curry((firebase, { dispatch }, user) => {
  dispatch(login(user))
  const entity = userEntity(user)
  return getEntity(firebase, entity)
  .then((dbEntity) => {
    if (!dbEntity) return entitySet(firebase, entity)
    return null
  })
})
