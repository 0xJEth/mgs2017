import React, { PropTypes } from 'react'

function ShowDetails({ showName, showLocation, showDates }) {
  return (
    <ul className="show-details list-reset">
      <li className="name">{ showName }</li>
      <li className="location">Showed in: { showLocation }</li>
      <li className="show-dates">On view: { showDates }</li>
    </ul>
  )
}

ShowDetails.propTypes = {
  showName: PropType.string,
  showLocation: PropType.string,
  showDates: PropType.string,
}
ShowDetails.defaultProps = {
  showName: 'Show III',
  showLocation: 'Some Gallery This person was in...',
  showDates: 'X–Y...',
}

export default ShowDetails
