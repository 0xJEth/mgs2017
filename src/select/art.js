// import { filter } from 'lodash'
import { filter, flow, get, mapValues } from 'lodash/fp'
import { setField } from 'cape-lodash'
import { buildFullEntity, getGraphNode } from 'redux-graph'
// import { createSelector } from 'reselect'
import { getGraphSlice } from './util'

// export const artFill = flow(
// )

// Needed to build refs.
export const artGraph = getGraphSlice(['CreativeWork', 'ImageObject', 'MediaObject'])

export const getAgentOf = get('rangeIncludes.agent')
export const createWorksOnly = filter({ type: 'CreativeWork' })
export const getArtRefs = flow(getAgentOf, createWorksOnly)

export function expandGetFullEntities(graphSlice) {
  return mapValues(flow(getGraphNode(graphSlice), buildFullEntity(1, graphSlice)))
}
export function addStudentArt(graphSlice, student) {
  if (!student) return null
  return setField('art', flow(getArtRefs, expandGetFullEntities(graphSlice)))(student)
}
// export const getArtwork = createSelector(userIsAgentOf, getArtItems, getArtRefs)
// artwork: state => map(getArtwork(state), item => getFullEntity(state, item)),
