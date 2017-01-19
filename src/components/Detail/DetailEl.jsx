import React, { PropTypes } from 'react'
import { find, map, size } from 'lodash'
import moment from 'moment'
import css from '../../style'
import './Detail.css'
import Close from '../CloseButton'
import DetailMap from './DetailMap'
import LocationList from './LocationList'

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
function getFirstProgram(programs) {
  if (!size(programs)) return null
  return find(programs)
}
function programStudents(program) {
  return program && program.students
}
function Show({ allStudentsIn }) {
  const program = getFirstProgram(allStudentsIn)
  const students = programStudents(program)
  return (
    <ul style={css('m0 mt1 p0 lsNone')} >
      {program && <h4 style={css('m0 mb0p5')} >{program.name}</h4>}
      {size(students) && map(students, ({ id, givenName, familyName }) =>
        <li key={id}>{givenName} {familyName}</li>
      )}
    </ul>
  )
}
Show.propTypes = {
  allStudentsIn: PropTypes.objectOf(PropTypes.object),
}

function DetailEl({ showGroup, detailClose }) {
  const close = <Close onClick={detailClose} style={css('absolute')} />
  if (!showGroup) return <div>Loading {close}</div>
  const { description, name, show, ...props } = showGroup
  const showDate = getShowDate(props)
  const reception = getReception(props)
  console.log(show)
  return (
    <detail>
      {close}
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
            <LocationList show={show} />
          </div>
          <div className="studentList" style={css('selfEnd')}>
            { map(show, showItem => <Show key={showItem.id} {...showItem} />) }
          </div>
        </div>
        {/* <div className="map" style={css('relative')}>
          <iframe className="mapFrame" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB5Ls4YpQRd3Pc6nDpWbc-Hsr0UYT_L90E&q=MICA,Baltimore+MD" />
        </div> */}
        <DetailMap style={css('relative')} />
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
}
export default DetailEl
