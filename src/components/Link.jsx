import React, { createElement, PropTypes } from 'react'
import Icon from './Icon'

export function getHref({ href, link, siteId, src }) {
  const linkHref = href || src || link
  if (siteId) return `${linkHref}?utm_source=mgs2017${siteId}`
  return linkHref
}
export function getContent({ icon, title }) {
  if (title) return title
  if (icon) return createElement(Icon, icon)
  return 'click here'
}
function Link(props) {
  const { className } = props
  return (
    <a className={className} href={getHref(props)}>
      {getContent(props)}
    </a>
  )
}
Link.propTypes = {
  className: PropTypes.string,
  // href: PropTypes.string,
  // siteId: PropTypes.string,
  // title: PropTypes.string,
}
export default Link
