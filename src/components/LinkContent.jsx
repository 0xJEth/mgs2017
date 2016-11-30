import React, { createElement, PropTypes } from 'react'
import { isObject, isString } from 'lodash'
import Icon from './Icon'

function buildIconInfo(icon) {
  const defaultIcon = { symbol: 'link' }
  if (isString(icon)) return { ...defaultIcon, symbol: icon, hidden: true }
  if (isObject(icon)) return { ...defaultIcon, ...icon }
  return defaultIcon
}
function getIcon(icon) {
  return createElement(Icon, buildIconInfo(icon))
}

// You can send it an icon or a name or both.
function LinkContent({ defaultName, icon, name, ...rest }) {
  if (name && !icon) return <span {...rest}>{name}</span>
  if (!name && icon) return getIcon(icon)
  if (icon && name) {
    return createElement('span', null, getIcon(icon), createElement('span', null, name))
  }
  return <span>{defaultName}</span>
}
LinkContent.defaultProps = {
  defaultName: 'Click here',
}
LinkContent.propTypes = {
  defaultName: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, React.PropTypes.Object]),
  name: PropTypes.string,
}
export default LinkContent
