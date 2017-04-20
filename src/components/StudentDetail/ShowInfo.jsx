import React, { PropTypes } from 'react'

function ShowDetails() {
  return (
    <ul className="show-details list-reset">
      <li className="name">Show Name...</li>
      <li className="location">Showed in: Location</li>
      <li className="show-dates">On view: Dates it was on view?</li>
    </ul>
  )
}

ShowDetails.propTypes = {
}
ShowDetails.defaultProps = {
}

export default ShowDetails
