import { mapValues, merge } from 'lodash'
import { filter, flow, keyBy, map, matchesProperty } from 'lodash/fp'
import { entityTypeSelector } from 'redux-graph'
import { createSelector } from 'reselect'
import { setWith } from 'cape-lodash'
import { getEmailParts } from './util'

export const personFill = flow(
  map(setWith('emailParts', 'email', getEmailParts)),
  filter(matchesProperty('emailParts[1]', 'mica.edu')),
  keyBy('emailParts[0]')
)

export const getPerson = createSelector(
  entityTypeSelector('Person'),
  personFill
)
export const getStudent = createSelector(
  entityTypeSelector('Student'),
  getPerson,
  (Student, Person) => mapValues(Student, item =>
    (Person[item.id] ? merge({}, Person[item.id], item) : item))
)
