import { filter, flow, get, mapValues, pickBy, sortBy } from 'lodash/fp'
import { setField } from 'cape-lodash'
import { buildFullEntity, getGraphNode } from 'redux-graph'
// import { createSelector } from 'reselect'
import { getGraphSlice } from './util'

// export const artFill = flow(
// )

// Needed to build refs.
export const artGraph = getGraphSlice(['CreativeWork', 'ImageObject', 'MediaObject'])

export const getAgentOf = get('rangeIncludes.agent')
export const createWorksOnly = pickBy({ type: 'CreativeWork' })
export const getArtRefs = flow(getAgentOf, createWorksOnly)
export const artFill = setField('position', ({ position, sortOrder }) =>
  parseInt(position || sortOrder || 0, 10)
)

export function expandGetFullEntities(graphSlice) {
  return mapValues(flow(getGraphNode(graphSlice), flow(buildFullEntity(1, graphSlice), artFill)))
}
export function addStudentArt(graphSlice, student) {
  if (!student) return null
  return setField('art',
    flow(
      getArtRefs,
      expandGetFullEntities(graphSlice),
      sortBy(['position', 'title']),
      filter(item => item.image || item.associatedMedia)
    )
  )(student)
}
// export const getArtwork = createSelector(userIsAgentOf, getArtItems, getArtRefs)
// artwork: state => map(getArtwork(state), item => getFullEntity(state, item)),
