import { flow } from 'lodash'
import { map } from 'lodash/fp'

import { entityTypeSelector } from 'redux-graph'
import { renamePick } from 'cape-lodash'

export const doIf = onTrue => thing => (thing ? onTrue(thing) : thing)
export const getProgram = entityTypeSelector('Program')

export const programOptions = flow(getProgram,
  doIf(map(renamePick({ id: 'value', name: 'name' })))
)
