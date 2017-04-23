import React, { PropTypes } from 'react'

function slideNavigation({ slideAdvance, slideRewind }) {
  return (
    <ul className="thumbs-navigation">
      <li>
        <button onClick={slideRewind}>
          <i className="fa fa-chevron-circle-left fa-5x"></i>
        </button>
      </li>
      <li>
        <button onClick={slideAdvance}>
          <i className="fa fa-chevron-circle-right fa-5x"></i>
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
