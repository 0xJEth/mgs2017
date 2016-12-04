import { camelCase, flow, mapValues } from 'lodash'
import { groupBy, mapKeys } from 'lodash/fp'
import { buildFullEntity, entityTypeSelector } from 'redux-graph'
import { createSelector, createStructuredSelector } from 'reselect'
import { getProgram, getShow } from '../../select/'

export const getShowGroup = entityTypeSelector('ShowGroup')

export const itemFill = flow()

const selectGraph = createStructuredSelector({
  Show: getShow,
  Program: getProgram,
})
export const itemsFilled = createSelector(
  selectGraph, getShowGroup,
  (graph, graphType) => mapValues(graphType, buildFullEntity(0, graph))
)
export const showGroupByName = createSelector(
  itemsFilled, flow(groupBy('groupType'), mapKeys(camelCase))
)
