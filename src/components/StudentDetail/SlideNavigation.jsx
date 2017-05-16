import React from 'react'
import PropTypes from 'prop-types'
// import css from 'cape-style'

function slideNavigation({ slideAdvance, slideRewind }) {
  return (
    <ul className="thumbs-navigation">
      <li>
        <button onClick={slideRewind}>
          <i className="fa fa-chevron-circle-left fa-5x" />
        </button>
      </li>
      <li>
        <button onClick={slideAdvance}>
          <i className="fa fa-chevron-circle-right fa-5x" />
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
