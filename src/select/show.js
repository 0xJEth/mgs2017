import { mapValues } from 'lodash'
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
export const getShowFull = createSelector(
  selectGraph, getShow,
  (graph, graphType) => mapValues(graphType, buildFullEntity(0, graph))
)
