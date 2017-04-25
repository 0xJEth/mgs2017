import { get, map, sortBy } from 'lodash'
import { connect } from 'react-redux'
import { structuredSelector } from 'cape-select'
import { selectGraph, fullEntitySelector } from 'redux-graph'
import Component from 'cape-mixer/lib/Editable/Fields'
import * as entityFields from './artFields'

// const selectEntity = flow(nthArg(1), property('prefix'), partial(select, selectGraph))
const selectEntity = (state, { prefix }) => get(selectGraph(state), prefix)
const selectEntityFull = fullEntitySelector(selectEntity)
const addId = (item, id) => ({ ...item, id, ho: 'l' })
export const getStateProps = structuredSelector({
  entity: selectEntityFull,
  fields: sortBy(map(entityFields, addId), 'position'),
  title: 'Edit Artwork',
})
export default connect(getStateProps)(Component)
