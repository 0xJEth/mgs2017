import { find, get } from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import css from 'cape-style'
import LinkEl from 'cape-mixer/lib/Link'
// import { getLink } from '../Schedule/ShowGroup'

function getLocName(loc) {
  return get(find(loc), 'name')
}
function ShowDetails({ location, showGroup }) {
  const showHref = `/details/${get(find(showGroup), 'id')}`
  return (
    <ul className="show-details" style={css('m0 p0 lsNone')}>
      <li className="name">
        <h2>
          <LinkEl href={showHref} internal>
            { get(find(showGroup), 'name') }
          </LinkEl>
        </h2>
      </li>
      <li className="location" style={css('fs1')}>Showed in: { getLocName(location) }</li>
      <li className="show-dates" style={css('fs1 mt0p5')}>On view: { get(find(showGroup), 'showDate') }</li>
    </ul>
  )
}

ShowDetails.propTypes = {
  // name: PropTypes.string.isRequired,
  location: PropTypes.objectOf(PropTypes.object).isRequired,
  showGroup: PropTypes.objectOf(PropTypes.object).isRequired,
}
ShowDetails.defaultProps = {
  name: 'Show IV',
  showLocation: 'Some Gallery This person was in...',
  showDates: 'X–Y...',
}

export default ShowDetails
