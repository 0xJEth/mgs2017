import { find, get } from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import css from 'cape-style'

function getLocName(loc) {
  return get(find(loc), 'name')
}
function ShowDetails({ name, location, showGroup }) {
  return (
    <ul className="show-details" style={css('m0 p0 lsNone')}>
      <li className="name"><h2>{ name }</h2></li>
      <li className="location" style={css('fs1')}>Showed in: { getLocName(location) }</li>
      <li className="show-dates" style={css('fs1 mt0p5')}>On view: { get(find(showGroup), 'showDate') }</li>
    </ul>
  )
}

ShowDetails.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.objectOf(PropTypes.object).isRequired,
  showGroup: PropTypes.objectOf(PropTypes.object).isRequired,
}
ShowDetails.defaultProps = {
  name: 'Show IV',
  showLocation: 'Some Gallery This person was in...',
  showDates: 'X–Y...',
}

export default ShowDetails
