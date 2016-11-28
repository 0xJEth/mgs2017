import React, { PropTypes } from 'react'
import css from '../../style'
import './Search.css'

function SearchEl() {
  return (
    <div>
      <label className="search-wrapper relative" htmlFor="search" style={css('fs1p5 lh3')}>
        <i className="fa fa-search absolute" aria-hidden="true" style={css('lh3 left1p5')} />
        <input className="search" style={css('lh3')} />
      </label>
    </div>
  )
}

SearchEl.propTypes = {
}
SearchEl.defaultProps = {
}
export default SearchEl
