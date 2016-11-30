import React, { PropTypes } from 'react'
import classnames from 'classnames'
import LinkEl from '../Link'


function NavItem({ isActive, id, ...props }) {
  return (
    <li className={classnames(id, { active: isActive })}>
      <LinkEl {...props} />
    </li>
  )
}
NavItem.propTypes = {
  action: PropTypes.func,
  href: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  isActive: PropTypes.bool,
  label: PropTypes.string,
}
NavItem.defaultProps = {
  isActive: false,
}
export default NavItem
