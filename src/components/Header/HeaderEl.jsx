import React, { PropTypes } from 'react'
import css from '../../style'
import './Header.css'
import Menu from './Menu'

function HeaderEl({ siteName }) {
  return (
    <header className="p1 mb2" id="siteHeader">
      <nav className="clearfix">
        <h1 style={css('fs2 m0 pt0p5')}>{siteName}</h1>
        <Menu />
      </nav>
    </header>
  )
}
HeaderEl.propTypes = {
  siteName: PropTypes.string,
}
HeaderEl.defaultProps = {
  siteName: 'MICA Grad Show 2017',
}
export default HeaderEl
