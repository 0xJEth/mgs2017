import { flow, get, includes, isMatch, partial, partialRight } from 'lodash'
import { eq, filter, map, omit, sortBy } from 'lodash/fp'
import { createSelector, createStructuredSelector } from 'reselect'
import { isAnonymous, isAuthenticated, selectUid } from 'cape-redux-auth'
import { selectGraph } from 'redux-graph'

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
export function getEmailDomain(email) {
  return email && email.split('@')[1].toLowerCase()
}
export const hasMicaEmail = flow(
  getUserEmail,
  getEmailDomain,
  eq('mica.edu')
)
export const isStudent = hasMicaEmail

export const isAdmin = flow(
  getUserEmail,
  partial(includes, ['kai@sundaysenergy.com', 'kbjornard@mica.edu'])
)
export const permissions = createStructuredSelector({
  isAnonymous,
  isAuthenticated,
  isStudent,
  isAdmin,
})
export const filterPerms = partialRight(createSelector, permissions, filterItems)
