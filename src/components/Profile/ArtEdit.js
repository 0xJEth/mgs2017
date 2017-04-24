import { arg, flow, sortBy } from 'lodash'
import { structuredSelector } from 'cape-select'
import { entitySelector, fullEntitySelector } from 'redux-graph'
import * as entityFields from './artFields'
import Fields from 'cape-mixer/lib/Editable/Fields'

const selectEntity = flow(arg(1), entitySelector)
const selectEntityFull = fullEntitySelector(selectEntity)

export const drawerEdit = structuredSelector({
  entity: selectEntityFull,
  fields: sortBy(entityFields, 'position'),
  title: 'Artwork',
})
