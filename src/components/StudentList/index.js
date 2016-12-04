import { filter, get, mapValues } from 'lodash'
import { entityTypeSelector, getRef } from 'redux-graph'
import { createSelector } from 'reselect'
import { select } from 'cape-select'
import { selectForm } from 'redux-field'
import { textSearchSelector } from '../Search'
import { getProgram } from '../../select/program'

const getStudents = entityTypeSelector('Student')

export function matchRef(entitySlice, predicate, item) {
  return get(entitySlice, get(getRef(item, predicate), 'id'), {})
}

export const itemFill = program => (item) => {
  const { familyName, givenName } = item
  const studentProgram = matchRef(program, 'program', item)
  return {
    ...item,
    program: studentProgram,
    programName: studentProgram.name,
    searchable: (givenName + familyName).toLowerCase(),
  }
}
export const fillItems = (student, program) => mapValues(student, itemFill(program))
export const itemsFilled = createSelector(getStudents, getProgram, fillItems)
export const programFilterValue = select(selectForm, ['Student', 'program', 'value'])
export function programFilter(items, id) {
  if (!id) return items
  return filter(items, { program: { id } })
}
export const itemsProgram = createSelector(itemsFilled, programFilterValue, programFilter)

export const itemsSearched = textSearchSelector(itemsProgram, 'Student')
