import { filter, get } from 'lodash'
import { getRef } from 'redux-graph'
import { createSelector } from 'reselect'
import { select } from 'cape-select'
import { selectForm } from 'redux-field'
import { textSearchSelector } from '../Search'
import { studentsFilled as itemsFilled } from '../../select/student'

export function matchRef(entitySlice, predicate, item) {
  if (!entitySlice) return null
  return get(entitySlice, get(getRef(item, predicate), 'id'), null)
}


export const programFilterValue = select(selectForm, ['Student', 'program', 'value'])
export function programFilter(items, id) {
  if (!id) return items
  return filter(items, { program: { id } })
}
export const itemsProgram = createSelector(itemsFilled, programFilterValue, programFilter)

export const itemsSearched = textSearchSelector(itemsProgram, 'Student')
