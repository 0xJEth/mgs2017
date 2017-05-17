import React from 'react'
import PropTypes from 'prop-types'
import { find, map, size } from 'lodash'
import css from 'cape-style'
import Peers from '../Peers'

function LocationItem({ location, students }) {
  if (!location) return <p>No location.</p>
  const { name, galleryHours } = location
  return (
    <li style={css('mb0p5')}>{name}
      {galleryHours &&
        <div className="openHours" style={css('fs0p75')}>
          Open: {galleryHours}
        </div>
      }
      {size(students) > 0 && <Peers students={students} />}
    </li>
  )
}
LocationItem.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string,
    galleryHours: PropTypes.string,
  }),
  students: PropTypes.objectOf(PropTypes.object),
}

function LocationList({ show, reception }) {
  return (
    <div>
      { reception &&
        <div>
          <h2 style={css('m0 mt2 fs2')}>Reception</h2>
          <p>{ reception }</p>
        </div>
      }
      <ul style={css('lsNone m0 p0 mt2 relative')}>
        <h2 style={css('mt2 mb0p5 fs2')}>Location</h2>
        {map(show, item => (
          <LocationItem key={item.id} location={find(item.location)} students={item.student} />
        ))}
      </ul>
    </div>
  )
}
LocationList.propTypes = {
  reception: PropTypes.string,
  show: PropTypes.objectOf(PropTypes.object),
}

export default LocationList
