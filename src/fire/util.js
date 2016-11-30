import { curry, flow, partial } from 'lodash'
import { merge, pick } from 'lodash/fp'
import { rename } from 'cape-lodash'
import { insertFields } from 'redux-graph'

export const userFields = pick([
  'displayName', 'email', 'emailVerified', 'isAnonymous', 'photoURL', 'uid',
])
export const userEntity = flow(
  userFields,
  rename({ displayName: 'name', photoURL: 'image', uid: 'id' }),
  merge({ type: 'Person' }),
)
export const authUsr = pick(['id', 'type'])

export const ensureIdType = curry((type, item, id) =>
  (item.id && item.type && item) || { ...item, id, type }
)
export function entityDb(db, item) {
  return db.child(item.type).child(item.id)
}
export function entitySet({ entity, TIMESTAMP }, node) {
  const item = insertFields(node)
  item.dateCreated = TIMESTAMP
  item.dateModified = TIMESTAMP
  return entityDb(entity, item).set(item)
  .then(() => item)
}
export function entityUpdate({ entity, TIMESTAMP }, node) {
  const item = { ...node, dateModified: TIMESTAMP }
  return entityDb(entity, item).update(item)
  .then(() => item)
}

export function getValue(method, db, id) {
  return db.child(id)[method]('value').then(res => res.val())
}
export const getChild = partial(getValue, 'once')
export function getDbEntity(firebase, entity) {
  return getChild(firebase.entity.child(entity.type), entity.id)
}
export const onChild = curry((actionType, db, id, callback) =>
  db.child(id).on(actionType, res => callback(res.val(), res.key))
)
export const getWatchChild = onChild('value')
export const onChildChanged = onChild('child_changed')
export function nextAction(firebase, store, action, next) {
  return next(action)
}
