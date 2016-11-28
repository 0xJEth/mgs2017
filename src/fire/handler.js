import { curry, isEmpty, map } from 'lodash'
import { ENTITY_PUTALL } from 'redux-graph'
import { replaceDb } from 'cape-redux-reducer'
import { ensureIdType, getChild, getWatchChild } from './util'

export const handleInit = curry(({ dispatch }, type, result) => {
  const payload = map(result, ensureIdType(type))
  if (isEmpty(payload)) return null
  return dispatch({ type: ENTITY_PUTALL, payload, meta: { sendSocket: false } })
})
export const typeLoader = curry((store, { entity }, typeId) =>
  getChild(entity, typeId).then(handleInit(store, typeId))
)
export const dbChange = curry(({ dispatch }, result) => dispatch(replaceDb(result)))
export function dbChanges({ entity }, store) {
  return getWatchChild(entity, 'db', dbChange(store))
}
