import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { isAuthenticated, selectUser } from 'cape-redux-auth'
import Component from './Me.jsx'
import { auth } from '../../fire/actions'
import { isStudent } from '../../select/perms'

export const getState = createStructuredSelector({
  isAuthenticated,
  isStudent,
  user: selectUser,
})
const actions = { auth }
export default connect(getState, actions)(Component)
