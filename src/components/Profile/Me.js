import { connect } from 'react-redux'
import { flow, map, property, propertyOf } from 'lodash'
import { createSelector, createStructuredSelector } from 'reselect'
import { entityTypeSelector } from 'redux-graph'
import { select } from 'cape-select'
import { isAnonymous, isAuthenticated, selectUser } from 'cape-redux-auth'
import { auth } from 'cape-firebase'
import Component from './Me.jsx'
import { hasMicaEmail, isStudent } from '../../select/perms'

export const userIsAgentOf = select(selectUser, 'rangeIncludes.agent')
export const getArtItems = entityTypeSelector('CreativeWork')

export function getArtRefs(refs, arts) {
  const getArt = flow(property('id'), propertyOf(arts))
  return (refs && map(refs, getArt)) || null
}
export const getState = createStructuredSelector({
  artwork: createSelector(userIsAgentOf, getArtItems, getArtRefs),
  authWarn: property('db.authWarn'),
  authStudentMissing: property('db.authStudentMissing'),
  hasMicaEmail,
  isAnonymous,
  isAuthenticated,
  isStudent,
  user: selectUser,
})
const actions = { auth }
export default connect(getState, actions)(Component)
