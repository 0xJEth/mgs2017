import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'
import css from 'cape-style'
import StudentLink from './StudentLink'

function Peers({ students }) {
  return (
    <ul style={css('mt0p5 mb2 p0 lsNone')} className="studentList">
      {map(students, item => (
        <li key={item.id}>
          <StudentLink {...item}><span className="name">{item.name}</span></StudentLink>
        </li>
      ))}
    </ul>
  )
}
Peers.propTypes = {
  students: PropTypes.objectOf(PropTypes.shape({ id: PropTypes.string.isRequired })).isRequired,
}

export default Peers
