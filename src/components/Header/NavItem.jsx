import React, { PropTypes } from 'react'
import classnames from 'classnames'
import css from '../../style'
import LinkEl from '../Link'

const styles = {
  links: css('ba br1 p1 positionCenter fs2'),
}

function NavItem({ isActive, id, styles, ...props }) {
  return (
    <li className={classnames(id, { active: isActive })} style={css('flexAuto textCenter')}>
      <LinkEl internal {...props} style={styles.links} />
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
