import { flow, get, includes, isMatch, partial, partialRight } from 'lodash'
import { eq, filter, map, omit, sortBy } from 'lodash/fp'
import { createSelector, createStructuredSelector } from 'reselect'
import { boolSelector, getSelect } from 'cape-select'
import { isAnonymous, isAuthenticated, selectUid } from 'cape-redux-auth'
import { selectGraph } from 'redux-graph'
import { getStudent } from './student'
import { getEmailDomain, getEmailId } from './util'

export function validate(perms) {
  return ({ validator }) => !validator || isMatch(perms, validator)
}

export function filterItems(items, perms) {
  return flow(
    filter(validate(perms)),
    sortBy(['position', 'name']),
    map(omit(['position', 'validator']))
  )(items)
}
export function getUserEmail(state) {
  return get(selectGraph(state), ['GoogleUser', selectUid(state), 'email'])
}

export const hasMicaEmail = flow(
  getUserEmail,
  getEmailDomain,
  eq('mica.edu')
)
export const isStudent = boolSelector(getSelect(getStudent, flow(getUserEmail, getEmailId)))

export const isAdmin = flow(
  getUserEmail,
  partial(includes, ['kai@sundaysenergy.com', 'kbjornard@mica.edu', 'mheberthuot@mica.edu', 'ejakowski@mica.edu'])
)
export const permissions = createStructuredSelector({
  isAnonymous,
  isAuthenticated,
  hasMicaEmail,
  isStudent,
  isAdmin,
})
export const filterPerms = partialRight(createSelector, permissions, filterItems)
