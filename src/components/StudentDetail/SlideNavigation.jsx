import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'cape-mixer/lib/Icon'
// import css from 'cape-style'

function slideNavigation({ slideAdvance, slideRewind }) {
  return (
    <ul className="thumbs-navigation">
      <li>
        <button onClick={slideRewind}>
          <Icon
            hidden
            symbol="arrow-left-bold-circle"
            className="fa-5x"
          />
        </button>
      </li>
      <li>
        <button onClick={slideAdvance}>
          <Icon
            hidden
            symbol="arrow-right-bold-circle"
            className="fa-5x"
          />
        </button>
      </li>
    </ul>
  )
}

slideNavigation.propTypes = {
  slideAdvance: PropTypes.func,
  slideRewind: PropTypes.func,
}
slideNavigation.defaultProps = {
}

export default slideNavigation
