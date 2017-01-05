import React, { PropTypes } from 'react'
import mgsBlock from '../../mgs2017LogoBlock.svg'
import css from '../../style'
import './Header.css'
import Menu from './Menu'

function HeaderEl({ siteName }) {
  return (
    <header id="siteHeader" className="bg-yellow" style={css('p2 pt1')} >
      <nav>
        <img src={mgsBlock} alt={siteName} title={siteName} className="mgsLogo" />
        <Menu />
      </nav>
    </header>
  )
}
HeaderEl.propTypes = {
  siteName: PropTypes.string,
}
HeaderEl.defaultProps = {
  siteName: 'MICA Grad Show',
}
export default HeaderEl
