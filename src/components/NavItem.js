import React, { PropTypes } from 'react'
import classnames from 'classnames'
import Link from 'redux-history-component'

import Icon from './Icon'

function NavItem({ active, action, href, icon, id, label }) {
  const Label = (
    <span>
      {icon && <Icon className="visible-sm" symbol={icon} hidden />}
      <span className="visible-lg">{label}</span>
    </span>
  )

  return (
    <li className={classnames(id, { active })}>
      {href && <Link href={href} alt={label} title={label}>{Label}</Link>}
      {action && <button onClick={action}>{Label}</button>}
    </li>
  )
}
NavItem.propTypes = {
  active: PropTypes.bool.isRequired,
  action: PropTypes.func,
  href: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
}
NavItem.defaultProps = {
}
export default NavItem
