import React from 'react'
import PropTypes from 'prop-types'
import css from 'cape-style'

function ProgramList({ program, peers }) {
  const href = `/students/${peers.id}`
  return (
    <aside className="program-list w20">
      <h3>{program.name}</h3>
      <ul className="program-peers studentList" style={css('m0 p0 lsNone')}>
        <li id={peers.id}>
          <a href={href}>{peers.name}</a>
        </li>
      </ul>
    </aside>
  )
}

ProgramList.propTypes = {
  peers: PropTypes.objectOf(PropTypes.array).isRequired,
  program: PropTypes.objectOf(PropTypes.object).isRequired,
}
ProgramList.defaultProps = {
  program: {
    name: 'GDMFA',
  },
  peers: {
    id: 'spliskin',
    name: 'Snake Pliskin',
  },
}

export default ProgramList
