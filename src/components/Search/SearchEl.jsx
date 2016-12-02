import React, { PropTypes } from 'react'
import css from '../../style'
import './Search.css'
import Icon from '../Icon'

function SearchEl({ onChange, value }) {
  return (
    <div>
      <label className="search-wrapper relative" htmlFor="search" style={css('fs1p5 lh3')}>
        <Icon
          className="fs-golden left-0"
          hidden
          style={css('absolute lh3 z2')}
          symbol="search"
        />
        <input
          className="search bn bb p0p5 pr2 pl4 z1"
          onChange={onChange} value={value || ''}
          type="text"
        />
      </label>
    </div>
  )
}

SearchEl.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}
SearchEl.defaultProps = {
}
export default SearchEl
