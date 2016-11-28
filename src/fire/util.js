import { curry, partial } from 'lodash'
import { pick } from 'lodash/fp'

export const userFields = pick([
  'displayName', 'email', 'emailVerified', 'isAnonymous', 'photoURL', 'uid',
])
export const ensureIdType = curry((type, item, id) =>
  (item.id && item.type && item) || { ...item, id, type }
)

export function getValue(method, db, id) {
  return db.child(id)[method]('value').then(res => res.val())
}
export const getChild = partial(getValue, 'once')
export function getWatchChild(db, id, callback) {
  return db.child(id).on('value', res => callback(res.val()))
}
