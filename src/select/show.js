import { find, flow, forEach, isEmpty, mapValues, set, size } from 'lodash'
import { transform } from 'lodash/fp'
import { setField } from 'cape-lodash'
import { buildFullEntity, entityTypeSelector } from 'redux-graph'
import { createSelector, createStructuredSelector } from 'reselect'
import moment from 'moment'
import { getStudent } from './person'
import { getProgramFull } from './program'

export const getShow = entityTypeSelector('Show')
export const getLocation = entityTypeSelector('Location')
export function getReception({ receptionStart, receptionEnd }) {
  if (!receptionStart) return null
  const recStartStr = moment(receptionStart).utc().format('dddd, MMMM D, h')
  const recEndStr = moment(receptionEnd).utc().format('hA')
  return `${recStartStr}–${recEndStr}`
}
function getShowDate({ startDate, endDate, ongoing }) {
  if (!startDate) return null
  const startStr = moment(startDate).format('MMMM Do')
  if (ongoing) return `${startStr}–Ongoing`
  if (!endDate) return startStr
  const endStr = moment(endDate).format('MMMM Do')
  return `${startStr}–${endStr}`
}
export const fillShowGroup = flow(
  setField('reception', getReception),
  setField('showDate', getShowDate)
)
export const getShowGroup = createSelector(
  entityTypeSelector('ShowGroup'), showgroups => mapValues(showgroups, fillShowGroup)
)

const selectGraph = createStructuredSelector({
  Location: getLocation,
  Program: getProgramFull,
  ShowGroup: getShowGroup,
  Student: getStudent,
})
export function getFirstProgram(programs) {
  if (!size(programs)) return null
  return find(programs)
}
export function programStudents(program) {
  return program && program.students
}
export function getStudents({ allStudentsIn, student }) {
  return student || flow(getFirstProgram, programStudents)(allStudentsIn)
}
export const itemFill = graph => flow(
  buildFullEntity(0, graph),
  setField('student', getStudents),
  // replaceField('location', find),
)
export const getShowFull = createSelector(
  selectGraph, getShow,
  (graph, graphType) => mapValues(graphType, itemFill(graph))
)

function setProgram(result, value) {
  if (isEmpty(value)) return result
  const { program, id, name } = value
  forEach(program, prog => set(result, [prog.id, id], name))
  return result
}
export const showByProgram = createSelector(
  getShowFull,
  transform(setProgram, undefined)
)

function setStudent(result, value) {
  if (isEmpty(value)) return result
  const { id, student } = value
  if (isEmpty(student)) return result
  forEach(student, kid => set(result, kid.id, id))
  return result
}
export const studentShows = flow(
  getShowFull,
  transform(setStudent, undefined)
)
