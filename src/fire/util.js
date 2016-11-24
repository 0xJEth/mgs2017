import { pick } from 'lodash/fp'

export const userFields = pick([
  'displayName', 'email', 'emailVerified', 'isAnonymous', 'photoURL', 'uid',
])
