import { flow, get, map, sortBy } from 'lodash'
import { replaceField } from 'cape-lodash'
import { connect } from 'react-redux'
import { structuredSelector } from 'cape-select'
import { selectGraph, fullEntitySelector } from 'redux-graph'
import Component from 'cape-mixer/lib/Editable/Fields'
import * as entityFields from './artFields'

// const selectEntity = flow(nthArg(1), property('prefix'), partial(select, selectGraph))
const selectEntity = (state, { prefix }) => get(selectGraph(state), prefix)
const selectEntityFull = fullEntitySelector(selectEntity)
function fixAssociatedMedia(associatedMedia) {
  return get(associatedMedia, 'url.href', associatedMedia || '')
}
const addId = (item, id) => ({ ...item, id })
export const getStateProps = structuredSelector({
  entity: flow(selectEntityFull, replaceField('associatedMedia', fixAssociatedMedia)),
  fields: sortBy(map(entityFields, addId), 'position'),
  title: 'Edit Artwork',
})
export default connect(getStateProps)(Component)
