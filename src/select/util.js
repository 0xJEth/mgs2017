import { flow, identity, map, mapValues, zipObject } from 'lodash'
import { buildFullEntity, entityTypeSelector, selectGraph } from 'redux-graph'
import { createSelector, createStructuredSelector } from 'reselect'

export function getGraphSlice(refTypeIds) {
  const structSelect = zipObject(refTypeIds, map(refTypeIds, entityTypeSelector))
  return createStructuredSelector(structSelect)
}
export function buildFullEntities(graph, graphType) {
  return mapValues(graphType, buildFullEntity(0, graph))
}
export function itemsFilled(itemFill = identity) {
  return (graph, graphType) => mapValues(graphType, flow(buildFullEntity(0, graph), itemFill))
}
// Extract specific ref entity types. Take refs of typeId and fill them in.
export function itemFiller(typeId, refTypeIds, itemFill) {
  const getGraphState = (!refTypeIds) ? selectGraph : getGraphSlice(refTypeIds)
  return createSelector(getGraphState, entityTypeSelector(typeId), itemsFilled(itemFill))
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
