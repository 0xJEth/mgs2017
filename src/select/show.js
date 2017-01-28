import { flow, forEach, isEmpty, mapValues, set } from 'lodash'
import { transform } from 'lodash/fp'
// import { replaceField } from 'cape-lodash'
import { buildFullEntity, entityTypeSelector } from 'redux-graph'
import { createSelector, createStructuredSelector } from 'reselect'
// import { itemFiller } from './util'
import { getProgramFull } from './program'

export const getShow = entityTypeSelector('Show')
export const getLocation = entityTypeSelector('Location')
export const getShowGroup = entityTypeSelector('ShowGroup')

const selectGraph = createStructuredSelector({
  Location: getLocation,
  Program: getProgramFull,
  ShowGroup: getShowGroup,
})
export const itemFill = graph => flow(
  buildFullEntity(0, graph),
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
export const showByProgram = flow(
  getShowFull,
  transform(setProgram, undefined)
)

function setStudent(result, value) {
  if (isEmpty(value)) return result
  const { student, id } = value
  if (isEmpty(student)) return result
  forEach(student, kid => set(result, kid.id, id))
  return result
}
export const studentShows = flow(
  getShowFull,
  transform(setStudent, undefined)
)
