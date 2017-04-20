import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'
import classnames from 'classnames'
import css from 'cape-style'
import LinkEl from 'cape-mixer/lib/Link'

function Links({ className, links, title, siteId }) {
  return (
    <section className={classnames('column', className)}>
      {title && <h3 style={css('fs1 m0')}>{title}</h3>}
      <ul style={css('lsNone m0 p0')}>
        {map(links, (item, index) =>
          <li key={index}><LinkEl {...item} siteId={siteId} /></li>
        )}
      </ul>
    </section>
  )
}
Links.propTypes = {
  className: PropTypes.string,
  links: PropTypes.array.isRequired,
  siteId: PropTypes.string,
  title: PropTypes.string,
}
export default Links
