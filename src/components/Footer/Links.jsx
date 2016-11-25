import React, { PropTypes } from 'react'
import { map } from 'lodash'
import css from '../../style'
import classnames from 'classnames'

function Links({ className, links, title }) {
  return (
    <section className={classnames('column', className)}>
      {title && <h3 style={css('fs1, m0')}>{title}</h3>}
      <ul style={css('lsNone m0 p0')}>
        {map(links, (item, index) => <li key={index}><a href={item.src}>{item.title}</a></li>)}
      </ul>
    </section>
  )
}
Links.propTypes = {
  className: PropTypes.string,
  links: PropTypes.array.isRequired,
  title: PropTypes.string,
}
export default Links
