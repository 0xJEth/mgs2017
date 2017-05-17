import React from 'react'
import PropTypes from 'prop-types'
import Peers from '../Peers'

function ProgramList({ name, students }) {
  return (
    <aside className="program-list w20">
      <h3>{name}</h3>
      <Peers students={students} />
    </aside>
  )
}

ProgramList.propTypes = {
  students: PropTypes.objectOf(PropTypes.shape({ id: PropTypes.string.isRequired })).isRequired,
  name: PropTypes.string.isRequired,
}
ProgramList.defaultProps = {
  name: 'GDMFA',
  peers: {
    id: 'spliskin',
    name: 'Snake Pliskin',
  },
}

export default ProgramList
