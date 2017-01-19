import { camelCase, flow, mapValues } from 'lodash'
import { get, groupBy, map, mapKeys, sortBy } from 'lodash/fp'
import fpValues from 'lodash/fp/mapValues'
import { setField } from 'cape-lodash'
import { buildFullEntity, entityTypeSelector } from 'redux-graph'
import { createSelector, createStructuredSelector } from 'reselect'
import { getProgramFull, getShowFull } from '../../select/'
import { arrayToSearch, makeSearchString, textSearchSelector } from '../Search'

export const getShowGroup = entityTypeSelector('ShowGroup')

// export const itemFill = flow()

const selectGraph = createStructuredSelector({
  Show: getShowFull,
  Program: getProgramFull,
})
export const programNames = flow(get('program'), map('name'), arrayToSearch)
export const getSearchable = item =>
  makeSearchString(['name', 'description']) + programNames(item)

export const itemFill = graph => flow(
  buildFullEntity(0, graph),
  setField('searchable', getSearchable)
)

export const itemsFilled = createSelector(
  selectGraph, getShowGroup,
  (graph, graphType) => mapValues(graphType, itemFill(graph))
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
