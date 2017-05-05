import React from 'react'
import PropTypes from 'prop-types'
import css from 'cape-style'
import Icon from 'cape-mixer/lib/Icon'
// import './Search.css'

function SearchEl({ onChange, value }) {
  return (
    <label className="search-wrapper" htmlFor="search" style={css('flexAuto relative fs1p5 lh3')}>
      <Icon
        hidden
        style={css('absolute lh3 z2 fs1p618 ml2')}
        symbol="search"
      />
      <input
        className="search"
        onChange={onChange} value={value || ''}
        type="text"
      />
    </label>
  )
}

SearchEl.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}
SearchEl.defaultProps = {
}
export default SearchEl
