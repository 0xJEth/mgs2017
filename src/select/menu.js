import { flow, partial, property } from 'lodash'
import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { createObj } from 'cape-lodash'
import { getRouteId } from 'cape-react-app'
import { auth, logout } from 'cape-firebase'
import { filterPerms } from './perms'

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
