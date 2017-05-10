import React from 'react'
import PropTypes from 'prop-types'
// import css from 'cape-style'

function ProgramList({ program, peers }) {
  return (
    <aside className="program-list three columns">
      <h3>{program.name}</h3>
      <ul className="program-peers list-reset">
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
