import React, { PropTypes } from 'react'
import { pick } from 'lodash'
import InternalLink from 'redux-history-component'
import LinkContent from './LinkContent'
import css from '../style'

export function getHref({ href, link, siteId, src }) {
  const linkHref = href || src || link
  if (siteId) return `${linkHref}?utm_source=${siteId}`
  return linkHref
}

function Link(props) {
  const { action, internal, ...rest } = props
  if (action) {
    return (
      <button onClick={action} style={css('ba br1 p1 inlineBlock fs1 textReset bgTrans')}>
        <LinkContent {...rest} />
      </button>
    )
  }
  if (internal) return <InternalLink {...rest}><LinkContent {...rest} /></InternalLink>

  return (
    <a href={getHref(props)} {...pick(rest, 'className', 'title')}>
      <LinkContent {...props} />
    </a>
  )
}
Link.propTypes = {
  action: PropTypes.func,
  className: PropTypes.string,
  internal: PropTypes.bool,
  href: PropTypes.string,
  name: PropTypes.string,
  // siteId: PropTypes.string,
}
export default Link
