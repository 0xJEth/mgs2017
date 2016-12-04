import React, { PropTypes } from 'react'
import mgsBlock from '../../mgs2017LogoBlock.svg'
import mgsInline from '../../mgs2017LogoInline.svg'
import css from '../../style'
import './Header.css'
import Menu from './Menu'

const imgBySizeId = {
  skinny: mgsBlock,
  wide: mgsInline,
}

function HeaderEl({ siteName, sizeId }) {
  return (
    <header id="siteHeader" className="bg-yellow" style={css('p2 pt1 mb2')} >
      <nav>
        <img src={imgBySizeId[sizeId]} alt={siteName} title={siteName} className="mgsLogo" />
        <Menu />
      </nav>
    </header>
  )
}
HeaderEl.propTypes = {
  siteName: PropTypes.string,
  sizeId: PropTypes.string,
}
HeaderEl.defaultProps = {
  siteName: 'MICA Grad Show',
  sizeId: 'wide',
}
export default HeaderEl
