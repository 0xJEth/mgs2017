// import { flow } from 'lodash'
import { map, sortBy } from 'lodash/fp'
import { createSelector } from 'reselect'
import { entityTypeSelector } from 'redux-graph'
import { renamePick } from 'cape-lodash'

export const doIf = onTrue => thing => (thing ? onTrue(thing) : thing)
export const getProgram = entityTypeSelector('Program')
export const programSorted = createSelector(getProgram, sortBy('name'))
export const programOptions = createSelector(programSorted,
  doIf(map(renamePick({ id: 'value', name: 'name' })))
)
