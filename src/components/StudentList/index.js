import { find, flow, filter, get, mapValues } from 'lodash'
import { buildFullEntity, getRef } from 'redux-graph'
import { createSelector } from 'reselect'
import { select } from 'cape-select'
import { setField } from 'cape-lodash'
import { selectForm } from 'redux-field'
import { makeSearchString, textSearchSelector } from '../Search'
import { selectGraph } from '../../select/'
import { studentShows } from '../../select/show'

export function matchRef(entitySlice, predicate, item) {
  if (!entitySlice) return null
  return get(entitySlice, get(getRef(item, predicate), 'id'), null)
}
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
export const itemFill = (graph, showIndex) => flow(
  buildFullEntity(0, graph),
  getShow(graph, showIndex),
  setField('showGroup', getShowGroup),
  setField('searchable', getSearchable)
)
export const itemsFilled = createSelector(
  selectGraph, studentShows,
  (graph, showIndex) => mapValues(graph.Student, itemFill(graph, showIndex))
)

export const programFilterValue = select(selectForm, ['Student', 'program', 'value'])
export function programFilter(items, id) {
  if (!id) return items
  return filter(items, { program: { id } })
}
export const itemsProgram = createSelector(itemsFilled, programFilterValue, programFilter)

export const itemsSearched = textSearchSelector(itemsProgram, 'Student')
