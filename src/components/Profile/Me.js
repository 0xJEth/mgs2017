import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { isAuthenticated, selectUser } from 'cape-redux-auth'
import Component from './Me.jsx'
import { auth } from '../../fire/actions'

export const getState = createStructuredSelector({
  isAuthenticated,
  user: selectUser,
})
const actions = { auth }
export default connect(getState, actions)(Component)
