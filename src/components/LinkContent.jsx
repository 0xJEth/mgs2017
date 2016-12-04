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
function LinkContent({ children, defaultName, icon, name }) {
  const text = isString(children) ? children : name
  if (text && !icon) return <span>{text}</span>
  if (!text && icon) return getIcon(icon)
  if (icon && text) {
    return createElement('span', null, getIcon(icon), createElement('span', null, text))
  }
  return <span>{defaultName}</span>
}
LinkContent.defaultProps = {
  defaultName: 'Click here',
}
LinkContent.propTypes = {
  children: PropTypes.node,
  defaultName: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  name: PropTypes.string,
}
export default LinkContent
