import React, { PropTypes } from 'react'
import map from 'lodash/map'
import { connect } from 'react-redux'
import { menuActions, menuSelector } from '../../select/menu'
import css from '../../style'
import NavItem from './NavItem'

function Menu({ activeId, links, actions }) {
  function isActive({ id }) { return activeId === id }
  function getAction({ action }) { return actions[action] }
  return (
    <ul className="menu" style={css('lsNone lsInline m0 p0')}>
      {map(links, link => (
        <NavItem {...link} key={link.id} isActive={isActive(link)} action={getAction(link)} />
      ))}
    </ul>
  )
}
Menu.propTypes = {
  activeId: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
}
Menu.defaultProps = {
}
export default connect(menuSelector, menuActions)(Menu)
