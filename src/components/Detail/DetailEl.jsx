import React, { PropTypes } from 'react'
import { map } from 'lodash'
import noop from 'lodash/noop'
import moment from 'moment'
import css from '../../style'
import './Detail.css'
import Close from '../CloseButton'

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
function DetailEl({ show, detailClose }) {
  if (!show) return <div>Loading</div>
  const { description, program, name, ...props } = show
  const showDate = getShowDate(props)
  const reception = getReception(props)
  return (
    <detail>
      <Close onClick={detailClose} style={css('absolute')} />
      <div className="flex">
        <div className="flex" style={css('p2 pt4 pb4')}>
          <div className="mainContent">
            <h1 style={css('m0')}>{ name }</h1>
            <p className="dateRange" style={css('m0 fs2')}>{ showDate }</p>
            <p className="description">
              { description }
            </p>
            <h2 style={css('m0 mt2 fs2')}>Reception</h2>
            <p>{ reception }</p>
            <ul style={css('lsNone m0 p0 mt2')}>
              <li>
                <h3 style={css('m0 mb0p5')}>{ program.id }</h3>
                <p>location.name? » any galleries should show up on the map</p>
              </li>
            </ul>
          </div>
          <div className="studentList" style={css('selfEnd')}>
            <p style={css('m0 mb1')}>list of students — based on the showgroup. Default to alpha order of all students in a particular showGroup (should the student names do anything? or are they just there for reference?)</p>
            <ul style={css('lsNone m0 mb1 p0')}>
              <li>
                <p style={css('m0')}>Generate a list ... Student Name and their Program? is a program listing useful on this page anywhere???</p>
              </li>
            </ul>
            <ul style={css('lsNone m0 p0')}>
              {program && map(program, (item, key) => <li key={key}>{item.name}</li>)}
            </ul>
          </div>
        </div>
        <div className="map" style={css('relative')}>
          <iframe className="mapFrame" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB5Ls4YpQRd3Pc6nDpWbc-Hsr0UYT_L90E&q=MICA,Baltimore+MD" />
        </div>
      </div>
    </detail>
  )
}
DetailEl.propTypes = {
  show: PropTypes.shape({
    description: PropTypes.string,
    gallery: PropTypes.string,
    program: PropTypes.string.isRequired,
    receptionDate: PropTypes.string.isRequired,
    showDate: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  detailClose: PropTypes.func.isRequired,
}
DetailEl.defaultProps = {
  description: 'Some things have a little description, that could get printed out here',
  gallery: 'Sheila & Richard Riggs Gallery',
  program: 'Teaching, MA',
  receptionDate: 'Friday, February 26, 5–7 pm',
  showDate: 'February 26–March 13, 2017',
  showName: 'Show # / Event Name',
  detailClose: noop,
}
export default DetailEl
