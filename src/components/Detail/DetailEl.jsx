import React, { PropTypes } from 'react'
import { find, map, size } from 'lodash'
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
function programStudents(programs) {
  if (!size(programs)) return null
  const firstProgram = find(programs)
  return firstProgram && firstProgram.students
}
function Show({ allStudentsIn }) {
  const students = programStudents(allStudentsIn)
  return (
    <div>
      {size(students) && map(students, ({ id, givenName, familyName }) =>
        <div key={id}>{givenName} {familyName}</div>
      )}
    </div>
  )
}
Show.propTypes = {
  allStudentsIn: PropTypes.objectOf(PropTypes.object),
  name: PropTypes.string,
}

function DetailEl({ showGroup, detailClose }) {
  if (!showGroup) return <div>Loading</div>
  const { description, program, name, show, ...props } = showGroup
  const showDate = getShowDate(props)
  const reception = getReception(props)
  console.log(show)
  return (
    <detail>
      <Close onClick={detailClose} style={css('absolute')} />
      <div className="flex">
        <div className="flex" style={css('p2 pt4 pb4')}>
          <div className="mainContent">
            <h1 style={css('m0')}>{ name }</h1>
            { showDate && <p className="dateRange" style={css('m0 fs2')}>{ showDate }</p>}
            {description && <p className="description">{ description }</p>}
            {reception && <div>
              <h2 style={css('m0 mt2 fs2')}>Reception</h2>
              <p>{ reception }</p>
            </div>}
            <ul style={css('lsNone m0 p0 mt2')}>
              <h2 style={css('m0 mt2 fs2')}>Location</h2>
              <li>
                <h3 style={css('m0 mb0p5')}>{ program.id }</h3>
                <p>location.name? » any galleries should show up on the map</p>
              </li>
            </ul>
          </div>
          <div className="studentList" style={css('selfEnd')}>
            { map(show, showItem => <Show key={showItem.id} {...showItem} />) }
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
  showGroup: PropTypes.shape({
    description: PropTypes.string,
    gallery: PropTypes.string,
    program: PropTypes.object.isRequired,
    receptionDate: PropTypes.string.isRequired,
    showDate: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  detailClose: PropTypes.func.isRequired,
}
DetailEl.defaultProps = {
  // description: 'Some things have a little description, that could get printed out here',
  // gallery: 'Sheila & Richard Riggs Gallery',
  // program: 'Teaching, MA',
  // receptionDate: 'Friday, February 26, 5–7 pm',
  // showDate: 'February 26–March 13, 2017',
  // showName: 'Show # / Event Name',
  // detailClose: noop,
}
export default DetailEl
