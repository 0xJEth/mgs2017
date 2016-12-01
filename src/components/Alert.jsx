import React, { PropTypes } from 'react'
import { merge } from 'lodash'
import classnames from 'classnames'
import tinycolor from 'tinycolor2'

const styles = {
  base: {
    border: 'solid',
  },
}
function getStyle({ color, type, style = {} }) {
  const baseColor = tinycolor(color[type])
  const colorStyles = {
    color: baseColor.toString(),
    backgroundColor: baseColor.lighten(45).toString(),
    borderColor: baseColor.darken(50).toString(),
  }
  return merge({}, styles.base, colorStyles, style)
}

function Alert(props) {
  const { children, type } = props
  return (
    <div className={classnames('alert', type)} role="alert" style={getStyle(props)}>
      {children}
    </div>
  )
}
Alert.defaultProps = {
  color: {
    danger: '#a94442',
    success: '#3c763d',
    warning: '#8a6d3b',
  },
}
Alert.propTypes = {
  color: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  type: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
}
export default Alert
