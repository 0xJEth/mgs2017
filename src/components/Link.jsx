import React, { createElement, PropTypes } from 'react'
import { isObject, isString, pick } from 'lodash'
import InternalLink from 'redux-history-component'
import LinkContent from './LinkContent'

export function getHref({ href, link, siteId, src }) {
  const linkHref = href || src || link
  if (siteId) return `${linkHref}?utm_source=${siteId}`
  return linkHref
}

function Link(props) {
  const { internal, ...rest } = props
  if (internal) {
    return (
      <InternalLink {...props}>
        <LinkContent {...props} />
      </InternalLink>
    )
  }
  return (
    <a href={getHref(props)} {...pick(rest, 'className', 'title')}>
      <LinkContent {...props} />
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
