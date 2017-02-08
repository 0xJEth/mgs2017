import { map, mapValues, zipObject } from 'lodash'
import { buildFullEntity, entityTypeSelector, selectGraph } from 'redux-graph'
import { createSelector, createStructuredSelector } from 'reselect'

export function getGraphSlice(refTypeIds) {
  return createStructuredSelector(zipObject(refTypeIds, map(refTypeIds, entityTypeSelector)))
}

export function itemFiller(typeId, refTypeIds) {
  const getGraphState = (!refTypeIds) ? selectGraph : getGraphSlice(refTypeIds)
  return createSelector(
    getGraphState,
    entityTypeSelector(typeId),
    (graph, graphType) => mapValues(graphType, buildFullEntity(0, graph))
  )
}
export function getEmailParts(email) {
  return (email && email.toLowerCase().split('@')) || []
}
export function getEmailDomain(email) {
  return getEmailParts(email)[1]
}
export function getEmailId(email) {
  return getEmailParts(email)[0]
}
