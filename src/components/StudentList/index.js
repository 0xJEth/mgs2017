import { filter, get, mapValues } from 'lodash'
import { entityTypeSelector, getRef } from 'redux-graph'
import { createSelector } from 'reselect'
import { select } from 'cape-select'
import { selectForm } from 'redux-field'
import { makeSearchString, textSearchSelector } from '../Search'
import { getProgram, getShow } from '../../select/'

export const getStudents = entityTypeSelector('Student')

export function matchRef(entitySlice, predicate, item) {
  if (!entitySlice) return null
  return get(entitySlice, get(getRef(item, predicate), 'id'), null)
}
export const getSearchable = makeSearchString(['givenName', 'familyName'])

export const itemFill = (program, show) => (item) => {
  const studentProgram = matchRef(program, 'program', item)
  return {
    ...item,
    program: studentProgram,
    programName: studentProgram.name,
    searchable: getSearchable(item),
    show: matchRef(show, 'show', item),
  }
}
export const fillItems = (student, program, show) => mapValues(student, itemFill(program, show))
export const itemsFilled = createSelector(getStudents, getProgram, getShow, fillItems)
export const programFilterValue = select(selectForm, ['Student', 'program', 'value'])
export function programFilter(items, id) {
  if (!id) return items
  return filter(items, { program: { id } })
}
export const itemsProgram = createSelector(itemsFilled, programFilterValue, programFilter)

export const itemsSearched = textSearchSelector(itemsProgram, 'Student')
