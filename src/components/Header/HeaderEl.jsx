import React, { PropTypes } from 'react'
import mgsInline from '../../mgs2017LogoInline.svg'
import css from '../../style'
import './Header.css'
import Menu from './Menu'

function HeaderEl({ siteName }) {
  return (
    <header id="siteHeader" className="bg-yellow" style={css('p2 mb2')} >
      <nav className="clearfix">
        <img src={mgsInline} alt={siteName} title={siteName} style={css('mw8 m1 mlrauto block')} />
        {/* <h1 style={css('fs2 m0 pt0p5 textCenter')}>{siteName}</h1> */}
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
