import React, { PropTypes } from 'react'
import { pick } from 'lodash'
import InternalLink from 'redux-history-component'
import LinkContent from './LinkContent'

export function getHref({ href, link, siteId, src }) {
  const linkHref = href || src || link
  if (siteId) return `${linkHref}?utm_source=${siteId}`
  return linkHref
}

function Link(props) {
  const { action, internal, ...rest } = props
  if (action) return <button onClick={action}><LinkContent {...rest} /></button>
  if (internal) return <InternalLink {...rest}><LinkContent {...props} /></InternalLink>

  return (
    <a href={getHref(props)} {...pick(rest, 'className', 'title')}>
      <LinkContent {...props} />
    </a>
  )
}
Link.propTypes = {
  action: PropTypes.func,
  className: PropTypes.string,
  internal: PropTypes.string,
  href: PropTypes.string,
  name: PropTypes.string,
  // siteId: PropTypes.string,
}
export default Link
