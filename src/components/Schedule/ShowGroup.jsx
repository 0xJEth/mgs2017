import React, { PropTypes } from 'react'
import css from '../../style'
import './ShowItem.css'

function ShowGroup({ gallery, program, receptionDate, showDate, name }) {
  return (
    <div className="showItem item">
      <a href="/details" className="block">
        <h1 style={css('m0 p0')}>{ name }</h1>
        <p className="dateRange">{ showDate }</p>
        <h2 style={css('m0 mt1 p0')}>Reception</h2>
        <p>{ receptionDate }</p>
        <h2>Includes</h2>
        <ul style={css('lsNone m0 p0')}>
          <li>
            <h3 style={css('fs1 m0 p0')}>{ program.name }</h3>
          </li>
          <li>
            <p style={css('fs1 m0 p0')}>{ gallery }</p>
          </li>
          <li>
            <p style={css('fs1 m0 p0')}>Is this a list? what else is needed here?</p>
          </li>
        </ul>
      </a>
    </div>
  )
}
ShowGroup.propTypes = {
  gallery: PropTypes.string.isRequired,
  program: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  receptionDate: PropTypes.string.isRequired,
  showDate: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
ShowGroup.defaultProps = {
  gallery: 'Sheila & Richard Riggs Gallery',
  program: { name: 'Teaching, MA' },
  receptionDate: 'Friday, February 26, 5–7 pm',
  showDate: 'February 26–March 13, 2017',
  showName: 'Teaching',
}
export default ShowGroup
