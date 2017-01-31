import React, { PropTypes } from 'react'
import { find, map, size } from 'lodash'
import moment from 'moment'
import css from '../../style'
import './Detail.css'
import Close from '../CloseButton'
import DetailMap from './DetailMap'
import LocationList from './LocationList'

function getShowDate({ startDate, endDate, ongoing }) {
  if (!startDate) return null
  const startStr = moment(startDate).format('MMMM Do')
  if (ongoing) return `${startStr}–Ongoing`
  if (!endDate) return null
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

function Show({ allStudentsIn, name, student }) {
  const program = getFirstProgram(allStudentsIn)
  const students = student || programStudents(program)
  return (
    <ul style={css('m0 mt1 p0 lsNone')} >
      {program && <h4 style={css('m0 mb0p5')} >{program.name}</h4>}
      {!program && <h4 style={css('m0 mb0p5')} >{name}</h4>}
      {size(students) > 0 && map(students, ({ id, givenName, familyName }) =>
        <li key={id}>{givenName} {familyName}</li>
      )}
    </ul>
  )
}
Show.propTypes = {
  allStudentsIn: PropTypes.objectOf(PropTypes.object),
  name: PropTypes.string,
  student: PropTypes.objectOf(PropTypes.object),
}

function DetailEl({ showGroup, detailClose }) {
  const close = <Close onClick={detailClose} style={css('absolute')} />
  if (!showGroup) return <div><h4 style={css('fixed positionCenter')} >Loading</h4> {close}</div>
  const { description, name, show, lat, lng, zoom, ...props } = showGroup
  const showDate = getShowDate(props)
  const reception = getReception(props)
  const defaultCenter = {
    lat,
    lng,
  }
  return (
    <detail>
      {close}
      <div className="flex">
        <div className="mainContent" style={css('p2')}>
          <h1 style={css('m0')}>{ name }</h1>
          { showDate && <p className="dateRange" style={css('m0 fs2')}>{ showDate }</p>}
          { description && <p className="description">{ description }</p>}
          { reception && <div>
            <h2 style={css('m0 mt2 fs2')}>Reception</h2>
            <p>{ reception }</p>
          </div>}
          <LocationList show={show} />
        </div>
        <div className="studentList" style={css('p2')}>
          { map(show, showItem => <Show key={showItem.id} {...showItem} />) }
        </div>
        { lat && <DetailMap defaultCenter={defaultCenter} zoom={zoom} style={css('relative')} show={show} /> }
        { !lat && <DetailMap zoom={zoom} style={css('relative')} show={show} /> }
      </div>
    </detail>
  )
}
DetailEl.propTypes = {
  showGroup: PropTypes.shape({
    description: PropTypes.string,
    gallery: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
    ongoing: PropTypes.bool,
    program: PropTypes.object.isRequired,
    receptionDate: PropTypes.string,
    showDate: PropTypes.string,
    name: PropTypes.string.isRequired,
    zoom: PropTypes.number,
  }),
  detailClose: PropTypes.func.isRequired,
}
DetailEl.defaultProps = {
}
export default DetailEl
