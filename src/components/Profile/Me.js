import { connect } from 'react-redux'
import { property } from 'lodash'
import { createStructuredSelector } from 'reselect'
import { fullEntitySelector } from 'redux-graph'
import { isAnonymous, isAuthenticated, selectUser } from 'cape-redux-auth'
import { auth } from 'cape-firebase'
import Component from './Me.jsx'
import { hasMicaEmail, isStudent } from '../../select/perms'

export const getState = createStructuredSelector({
  authWarn: property('db.authWarn'),
  authStudentMissing: property('db.authStudentMissing'),
  hasMicaEmail,
  isAnonymous,
  isAuthenticated,
  isStudent,
  user: fullEntitySelector(selectUser),
})
const actions = { auth }
export default connect(getState, actions)(Component)
