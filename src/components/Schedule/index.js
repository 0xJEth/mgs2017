import { camelCase, compact, find, flow, mapValues, set, unset } from 'lodash'
import { get, groupBy, map, mapKeys, sortBy } from 'lodash/fp'
import fpValues from 'lodash/fp/mapValues'
import moment from 'moment'
import { setField } from 'cape-lodash'
import { buildFullEntity } from 'redux-graph'
import { createSelector } from 'reselect'
import { selectGraph } from '../../select/'
import { getShowGroup } from '../../select/show'

import { arrayToSearch, makeSearchString, textSearchSelector } from '../Search'

export const programNames = flow(get('program'), map('name'), arrayToSearch)
export const getSearchable = item =>
  makeSearchString(['name', 'description']) + programNames(item)

export const pluckLocations = flow(get('show'), map(flow(get('location'), find)), compact)
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
export const itemFill = graph => flow(
  buildFullEntity(0, graph),
  setField('searchable', getSearchable),
  setField('locations', pluckLocations),
  setField('reception', getReception),
  setField('showDate', getShowDate)
)

export function mergeShows(showgroups) {
  const childId = 'recL5bU5855qMhQT4'
  const child = showgroups[childId]
  const parentId = 'recy5OLOvJNnpWuAD'
  const parent = showgroups[parentId]
  set(showgroups, [parentId, 'extraChild'], child)
  if (parent && parent.locations) {
    set(showgroups, [parentId, 'locations'], parent.locations.concat(child.locations))
  }
  unset(showgroups, childId)
  return showgroups
}

export const itemsFilled = createSelector(
  selectGraph, getShowGroup,
  (graph, graphType) => mergeShows(mapValues(graphType, itemFill(graph)))
)
export const itemsSearched = textSearchSelector(itemsFilled, 'ShowGroup')
export const showGroupByName = createSelector(
  itemsSearched, flow(
    groupBy('groupType'),
    mapKeys(camelCase),
    fpValues(sortBy('startDate'))
  )
)

// orderBy('startDate')
