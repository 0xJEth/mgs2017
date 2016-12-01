import { eq, every, filter, get, partial, partialRight } from 'lodash'
import { createSelector, createStructuredSelector } from 'reselect'
import { isAnonymous, isAuthenticated, selectUid } from 'cape-redux-auth'
import { selectGraph } from 'redux-graph'

export function validate(perms) {
  const isValid = partial(get, perms)
  return ({ validators }) => !validators || every(validators, isValid)
}

export function filterItems(items, perms) {
  return filter(items, validate(perms))
}
export function hasMicaEmail(state) {
  const userEmail = get(selectGraph(state), ['GoogleUser', selectUid(state), 'email'])
  const emailDomain = userEmail && userEmail.split('@')[1].toLowerCase()
  return eq(emailDomain, 'mica.edu')
}
export const isStudent = hasMicaEmail

export const permissions = createStructuredSelector({
  isAnonymous,
  isAuthenticated,
  isStudent,
})
export const filterPerms = partialRight(createSelector, permissions, filterItems)
