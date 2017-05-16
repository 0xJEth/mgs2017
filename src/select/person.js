import { mapValues, merge, overSome } from 'lodash'
import { filter, flow, get, keyBy, map, matchesProperty } from 'lodash/fp'
import { createSelector } from 'reselect'
import { setField, setWith } from 'cape-lodash'
import { entityTypeSelector } from 'redux-graph'
import { getEmailParts } from './util'

export const getHasDetail = overSome([
  'statement', 'rangeIncludes.agent',
])
export const personFill = flow(
  setWith('emailParts', 'email', getEmailParts),
  setField('hasDetail', getHasDetail),
  setField('personId', get('id'))
)
// Limit to mica.edu people. Key by email username.
// @TODO will need to add artwork?
export const personIndexFill = flow(
  map(personFill),
  filter(matchesProperty('emailParts[1]', 'mica.edu')),
  keyBy('emailParts[0]')
)

export const getPerson = createSelector(
  entityTypeSelector('Person'),
  personIndexFill
)
export function getName({ familyName, givenName, name }) {
  return name || `${givenName} ${familyName}`
}
export function getDetailUrl({ hasDetail, id }) {
  return hasDetail ? `/students/${id}` : null
}
export const studentFill = flow(
  setField('name', getName),
  setField('detailUrl', getDetailUrl)
)
export function studentIndexFill(Student, Person) {
  return mapValues(Student, item =>
    studentFill(Person[item.id] ? merge({}, Person[item.id], item) : item)
  )
}
// Person and Student are merged before handling further. Do not worry about Person elsewhere.
export const getStudent = createSelector(
  entityTypeSelector('Student'),
  getPerson,
  studentIndexFill
)
