import React from 'react'
import PropTypes from 'prop-types'
import css from 'cape-style'

function ProgramList({ program, peers }) {
  return (
    <aside className="program-list w20">
      <h3>{program.name}</h3>
      <ul className="program-peers" style={css('m0 p0 lsNone')}>
        <li id={peers.id}>
          {peers.name} - Peer names and link to their profile page...
        </li>
      </ul>
    </aside>
  )
}

ProgramList.propTypes = {
  peers: PropTypes.objectOf(PropTypes.array),
  program: PropTypes.objectOf(PropTypes.object).isRequired,
}
ProgramList.defaultProps = {
  program: {
    name: 'GDMFA',
  },
  peers: [
    {
      id: '034655',
      name: 'Snake Pliskin',
    },
  ],
}

export default ProgramList
