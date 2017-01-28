import { flow, filter, get, mapValues } from 'lodash'
import { buildFullEntity, entityTypeSelector, getRef } from 'redux-graph'
import { createSelector } from 'reselect'
import { select } from 'cape-select'
import { setField } from 'cape-lodash'
import { selectForm } from 'redux-field'
import { makeSearchString, textSearchSelector } from '../Search'
import { selectGraph } from '../../select/'
import { studentShows } from '../../select/show'

export const getStudents = entityTypeSelector('Student')

export function matchRef(entitySlice, predicate, item) {
  if (!entitySlice) return null
  return get(entitySlice, get(getRef(item, predicate), 'id'), null)
}
export const getSearchable = makeSearchString(['givenName', 'familyName'])

export const itemFill = (graph, showIndex) => flow(
  buildFullEntity(0, graph),
  setField('searchable', getSearchable),
  setField('show', ({ show, id }) => show || (showIndex[id] && graph.Show[showIndex[id]]))
)
export const itemsFilled = createSelector(
  selectGraph, getStudents, studentShows,
  (graph, graphType, showIndex) => mapValues(graphType, itemFill(graph, showIndex))
)

export const programFilterValue = select(selectForm, ['Student', 'program', 'value'])
export function programFilter(items, id) {
  if (!id) return items
  return filter(items, { program: { id } })
}
export const itemsProgram = createSelector(itemsFilled, programFilterValue, programFilter)

export const itemsSearched = textSearchSelector(itemsProgram, 'Student')
