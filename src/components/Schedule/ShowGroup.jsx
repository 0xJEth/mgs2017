import React, { PropTypes } from 'react'
import { map } from 'lodash'
import css from '../../style'
import './ShowItem.css'

function ShowGroup({ endDate, program, receptionEnd, receptionStart, startDate, name }) {
  const showDate = (startDate && `${startDate} - ${endDate}`) || ''
  const receptionDate = `${receptionStart} ${receptionEnd}`
  return (
    <div className="showItem item">
      <a href="/details" className="block">
        <h1 style={css('m0 p0')}>{ name }</h1>
        <p className="dateRange">{ showDate }</p>
        <h2 style={css('m0 mt1 p0')}>Reception</h2>
        <p>{ receptionDate }</p>
        <h2>Includes</h2>
        <ul style={css('lsNone m0 p0')}>
          {program && map(program, item => <li>{item.name}</li>)}
        </ul>
      </a>
    </div>
  )
}
ShowGroup.propTypes = {
  // gallery: PropTypes.string.isRequired,
  program: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  receptionEnd: PropTypes.string.isRequired,
  receptionStart: PropTypes.string.isRequired,
  showDate: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
ShowGroup.defaultProps = {
  endDate: '',
  gallery: 'Sheila & Richard Riggs Gallery',
  program: { name: 'Teaching, MA' },
  receptionEnd: '',
  receptionStart: '',
  showDate: 'February 26–March 13, 2017',
  showName: 'Teaching',
  startDate: '',
}
export default ShowGroup
