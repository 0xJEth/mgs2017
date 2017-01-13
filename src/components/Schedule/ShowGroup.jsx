import React, { PropTypes } from 'react'
import { map } from 'lodash'
import moment from 'moment'
import css from '../../style'
import './ShowItem.css'
import Link from '../Link'

function getShowDate({ startDate, endDate }) {
  if (!startDate) return null
  const startStr = moment(startDate).format('MMMM Do')
  const endStr = moment(endDate).format('MMMM Do')
  return `${startStr}–${endStr}`
}
function getReception({ receptionStart, receptionEnd }) {
  if (!receptionStart) return null
  const recStartStr = moment(receptionStart).utc().format('dddd, MMMM D, h')
  const recEndStr = moment(receptionEnd).utc().format('hA')
  return `${recStartStr}–${recEndStr}`
}
function ShowGroup({ program, name, description, link, ...props }) {
  const showDate = getShowDate(props)
  const reception = getReception(props)
  return (
    <div className="showItem item">
      <a href={link} className="block black" style={css('textReset')}>
        <h1 style={css('m0 mb1')}>{ name }</h1>
        {showDate && <h2 style={css('m0 mb1')} className="dateRange">{showDate}</h2>}
        {reception && <h2 style={css('m0 mt1 mb1')}>Reception: <br />{reception}</h2>}
        <ul style={css('lsNone m0 p0')}>
          {program && map(program, (item, key) => <li key={key}>{item.name}</li>)}
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
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
ShowGroup.defaultProps = {
  endDate: '',
  gallery: 'Sheila & Richard Riggs Gallery',
  link: '/details',
  name: '[name here...]',
  program: { name: 'Teaching, MA' },
  receptionEnd: '',
  receptionStart: '',
  showDate: 'February 26–March 13, 2017',
  showName: 'Teaching',
  startDate: '',
  description: 'Tk',
}
export default ShowGroup
