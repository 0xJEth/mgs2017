import React, { PropTypes } from 'react'
import css from '../../style'
import './Search.css'
import Icon from '../Icon'

function SearchEl({ onChange, value }) {
  return (
    <div>
      <label className="search-wrapper" htmlFor="search" style={css('relative fs1p5 lh3')}>
        <Icon
          hidden
          style={css('absolute lh3 z2 fs1p618')}
          symbol="search"
        />
        <input
          className="search"
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
