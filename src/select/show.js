import { mapValues } from 'lodash'
import { buildFullEntity, entityTypeSelector } from 'redux-graph'
import { createSelector, createStructuredSelector } from 'reselect'
// import { itemFiller } from './util'
import { getProgramFull } from '../select/'

export const getShow = entityTypeSelector('Show')

const selectGraph = createStructuredSelector({
  Program: getProgramFull,
})
export const getShowFull = createSelector(
  selectGraph, getShow,
  (graph, graphType) => mapValues(graphType, buildFullEntity(0, graph))
)
