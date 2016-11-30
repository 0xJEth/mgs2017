import { property } from 'lodash'
import { createStructuredSelector } from 'reselect'
import { logout } from 'cape-redux-auth'
import { filterPerms } from './perms'
import { getRouteId } from '../redux/routing'

export const getMenu = property('db.menu')

export const menuItems = filterPerms(getMenu)

// Used for the component state.
export const menuSelector = createStructuredSelector({
  links: menuItems,
  activeId: getRouteId,
})
export const menuActions = {
  logout,
}
