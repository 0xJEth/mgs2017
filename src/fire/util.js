import { curry, partial } from 'lodash'
import { pick } from 'lodash/fp'
import { insertFields } from 'redux-graph'

export const userFields = pick([
  'displayName', 'email', 'emailVerified', 'isAnonymous', 'photoURL', 'uid',
])
export const ensureIdType = curry((type, item, id) =>
  (item.id && item.type && item) || { ...item, id, type }
)
export function entityDb(db, item) {
  return db.child(item.type).child(item.id)
}
export function entitySet({ entity, TIMESTAMP }, store, node) {
  const item = insertFields(node)
  item.dateCreated = TIMESTAMP
  item.dateModified = TIMESTAMP
  return entityDb(entity, item).set(item)
  .then(() => item)
}
export function updateItem({ entity, TIMESTAMP }, store, node) {
  const item = { ...node, dateModified: TIMESTAMP }
  return entityDb(entity, item).update(item)
  .then(() => item)
}

export function getValue(method, db, id) {
  return db.child(id)[method]('value').then(res => res.val())
}
export const getChild = partial(getValue, 'once')
export function getWatchChild(db, id, callback) {
  return db.child(id).on('value', res => callback(res.val()))
}
