import React, { createElement, PropTypes } from 'react'
import { isObject, isString, pick } from 'lodash'
import InternalLink from 'redux-history-component'
import Icon from './Icon'

export function getHref({ href, link, siteId, src }) {
  const linkHref = href || src || link
  if (siteId) return `${linkHref}?utm_source=${siteId}`
  return linkHref
}
function buildIconInfo(icon) {
  const defaultIcon = { symbol: 'link' }
  if (isString(icon)) return { ...defaultIcon, symbol: icon, hidden: true }
  if (isObject(icon)) return { ...defaultIcon, ...icon }
  return defaultIcon
}
function getIcon(icon) {
  return createElement(Icon, buildIconInfo(icon))
}
export function getContent({ icon, name }) {
  if (name && !icon) return createElement('span', null, name)
  if (!name && icon) return getIcon(icon)
  if (icon && name) {
    return createElement('span', null, getIcon(icon), createElement('span', null, name))
  }
  return 'click here'
}
function Link(props) {
  const { href, internal, name, ...rest } = props
  if (internal) {
    return <InternalLink href={href} alt={name} {...rest}>{getContent(props)}</InternalLink>
  }
  return (
    <a href={getHref(props)} {...pick(rest, 'className', 'title')}>
      {getContent(props)}
    </a>
  )
}
Link.propTypes = {
  className: PropTypes.string,
  internal: PropTypes.string,
  href: PropTypes.string,
  name: PropTypes.string,
  // siteId: PropTypes.string,
}
export default Link
