import React, { PropTypes } from 'react'
import mgsBlock from '../../mgs2017LogoBlock.svg'
import css from '../../style'
import './Header.css'
import Blurb from '../Blurb/Blurb'
import Menu from './Menu'

function HeaderEl({ siteName }) {
  return (
    <header id="siteHeader" className="bg-white" style={css('p0 pt1')} >
      <Blurb mgsBlock={mgsBlock} siteName={siteName} />
      <nav className="bg-yellow" >
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
