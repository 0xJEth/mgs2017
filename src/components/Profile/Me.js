import { connect } from 'react-redux'
import { filter, map, property } from 'lodash'
import { createSelector, createStructuredSelector } from 'reselect'
import { entityTypeSelector, getFullEntity } from 'redux-graph'
import { select } from 'cape-select'
import { isAnonymous, isAuthenticated, selectUser } from 'cape-redux-auth'
import { auth } from 'cape-firebase'
import Component from './Me.jsx'
import { hasMicaEmail, isStudent } from '../../select/perms'

export const userIsAgentOf = select(selectUser, 'rangeIncludes.agent')
export const getArtItems = entityTypeSelector('CreativeWork')

export function getArtRefs(refs, arts) {
  const getArt = item => arts[item.id] || item
  return (refs && map(filter(refs, { type: 'CreativeWork' }), getArt)) || null
}
export const getArtwork = createSelector(userIsAgentOf, getArtItems, getArtRefs)
export const getState = createStructuredSelector({
  artwork: state => map(getArtwork(state), item => getFullEntity(state, item)),
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
