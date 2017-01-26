import React, { PropTypes } from 'react'
import { find, map } from 'lodash'
import css from '../../style'

function LocationItem({ name, galleryHours }) {
  return (
    <li style={css('mb0p5')}>{name}
      {galleryHours && <div className="openHours" style={css('fs0p75')}>
        Open: {galleryHours}
      </div>}
    </li>
  )
}
LocationItem.propTypes = {
  name: PropTypes.string,
  galleryHours: PropTypes.string,
}

function LocationList({ show }) {
  return (
    <ul style={css('lsNone m0 p0 mt2')}>
      <h2 style={css('mt2 mb0p5 fs2')}>Location</h2>
      { map(show, showItem => <LocationItem key={showItem.id} {...find(showItem.location)} />) }
    </ul>
  )
}
LocationList.propTypes = {
  show: PropTypes.objectOf(PropTypes.object),
}

export default LocationList
