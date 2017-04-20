import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import css from 'cape-style'
import LinkEl from 'cape-mixer/lib/Link'

const styles = {
  links: css('textReset'),
}

function NavItem({ isActive, id, ...props }) {
  return (
    <li className={classnames(id, { active: isActive })}>
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
