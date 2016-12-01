import { flow, partial, property } from 'lodash'
import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { logout } from 'cape-redux-auth'
import { createObj } from 'cape-lodash'
import { filterPerms } from './perms'
import { getRouteId } from '../redux/routing'
import { auth } from '../fire/actions'

export const getMenu = property('db.menu')

export const menuItems = filterPerms(getMenu)

// Used for the component state.
export const menuSelector = createStructuredSelector({
  links: menuItems,
  activeId: getRouteId,
})

const actions = {
  auth,
  logout,
}
export const menuActions = flow(
  partial(bindActionCreators, actions),
  createObj('actions')
)
