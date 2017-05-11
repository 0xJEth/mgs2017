import { filter, flow, keyBy, map, matchesProperty } from 'lodash/fp'
import { createSelector } from 'reselect'
import { setWith } from 'cape-lodash'
import { entityTypeSelector } from 'redux-graph'
import { getEmailParts } from './util'

// Limit to mica.edu people. Key by email username.
export const personFill = flow(
  map(setWith('emailParts', 'email', getEmailParts)),
  filter(matchesProperty('emailParts[1]', 'mica.edu')),
  keyBy('emailParts[0]')
)

export const getPerson = createSelector(
  entityTypeSelector('Person'),
  personFill
)
