import React from 'react'
import css from '../../style'
import './Search.css'
import Icon from '../Icon'

function SearchEl() {
  return (
    <div>
      <label className="search-wrapper relative" htmlFor="search" style={css('fs1p5 lh3')}>
        <Icon symbol="search" className="absolute fs-golden left-0 z10" aria-hidden="true" style={css('lh3')} />
        <input className="search bn bb p0p5 pr2 pl4 z1" />
      </label>
    </div>
  )
}

SearchEl.propTypes = {
}
SearchEl.defaultProps = {
}
export default SearchEl
