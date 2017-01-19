import React, { PropTypes } from 'react'
import { find, map } from 'lodash'
import css from '../../style'

function LocationItem({ name }) {
  return <li>{name}</li>
}
LocationItem.propTypes = {
  name: PropTypes.string.isRequired,
}

function LocationList({ show }) {
  return (
    <ul style={css('lsNone m0 p0 mt2')}>
      <h2 style={css('m0 mt2 fs2')}>Location</h2>
      { map(show, showItem => <LocationItem key={showItem.id} {...find(showItem.location)} />) }
    </ul>
  )
}
LocationList.propTypes = {
  show: PropTypes.objectOf(PropTypes.object),
}

export default LocationList
