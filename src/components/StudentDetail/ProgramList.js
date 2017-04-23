import React, { PropTypes } from 'react'
import map from 'lodash/map'

import Link from '../../containers/Link'

function ProgramList({ program }) {
  return (
    <aside className="program-list three columns">
      <h3>{program.name}</h3>
      <ul className="program-peers list-reset">
        {
          map(program.student, (peer) => (
            <li key={peer.id}>
              <Link to={`/student/${peer.id}`}>{peer.name.display}</Link>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}

ProgramList.propTypes = {
  peers: PropTypes.array,
  program: PropTypes.object.isRequired,
}
ProgramList.defaultProps = {
}

export default ProgramList
