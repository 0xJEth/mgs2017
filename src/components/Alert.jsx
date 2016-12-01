import React, { PropTypes } from 'react'
import { merge } from 'lodash'
import classnames from 'classnames'

const style = {
  base: {
    border: 'solid',
  },
  danger: {
    color: '#a94442',
    backgroundColor: '#f2dede',
    borderColor: '#ebccd1',
  },
  success: {
    color: '#3c763d',
    backgroundColor: '#dff0d8',
    borderColor: '#d6e9c6',
  },
  warning: {
    color: '#8a6d3b',
    backgroundColor: '#fcf8e3',
    borderColor: '#faebcc',
  },
}

function Alert({ children, type }) {
  return (
    <div className={classnames('alert', type)} role="alert" style={merge(style.base, style[type])}>
      {children}
    </div>
  )
}
Alert.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
}
export default Alert
