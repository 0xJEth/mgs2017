import { find, get } from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
// import css from 'cape-style'
function getLocName(loc) {
  return get(find(loc), 'name')
}
function ShowDetails({ name, location, showGroup }) {
  return (
    <ul className="show-details list-reset">
      <li className="name">{ name }</li>
      <li className="location">Showed in: { getLocName(location) }</li>
      <li className="show-dates">On view: { get(find(showGroup), 'showDate') }</li>
    </ul>
  )
}

ShowDetails.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.objectOf(PropTypes.object).isRequired,
  showGroup: PropTypes.objectOf(PropTypes.object).isRequired,
}
ShowDetails.defaultProps = {
  name: 'Show X',
  showLocation: 'Some Gallery This person was in...',
  showDates: 'X–Y...',
}

export default ShowDetails
