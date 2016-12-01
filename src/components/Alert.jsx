import React, { PropTypes } from 'react'
import classnames from 'classnames'

function Alert({ children, type }) {
  return (
    <div className={classnames('alert', type)} role="alert">
      {children}
    </div>
  )
}
Alert.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
}
export default Alert
