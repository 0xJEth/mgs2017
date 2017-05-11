import { find, flow, get, mapValues, merge } from 'lodash'
import { setField } from 'cape-lodash'
import { createSelector, createStructuredSelector } from 'reselect'
import { buildFullEntity, entityTypeSelector } from 'redux-graph'
import { makeSearchString } from '../components/Search'

import { getPerson } from './person'
import { getShowFull, studentShows } from './show'
import { getProgramFull } from './program'

export const selectGraph = createStructuredSelector({
  Program: getProgramFull,
  Show: getShowFull,
  Student: entityTypeSelector('Student'),
})

// full student
export function getShowGroup(student) {
  const showGroup = find(get(student, 'show.showGroup'))
  return (showGroup && showGroup.id) ? showGroup : null
}
export const getSearchable = makeSearchString(['givenName', 'familyName', 'showGroup.name'])

export function getShow(graph, showIndex) {
  return (item) => {
    if (item.show) return item
    const show = showIndex[item.id] && graph.Show[showIndex[item.id]]
    if (show) {
      return {
        ...item,
        show,
        shows: true,
      }
    }
    return item
  }
}
export const studentFill = (graph, showIndex) => flow(
  buildFullEntity(0, graph),
  getShow(graph, showIndex),
  setField('showGroup', getShowGroup),
  setField('searchable', getSearchable)
)
export const studentsFilled = createSelector(
  selectGraph, studentShows,
  (graph, showIndex) => mapValues(graph.Student, studentFill(graph, showIndex))
)
export const getStudent = createSelector(
  studentsFilled,
  getPerson,
  (Student, Person) => mapValues(Student, item =>
    (Person[item.id] ? merge({}, Person[item.id], item) : item))
)
