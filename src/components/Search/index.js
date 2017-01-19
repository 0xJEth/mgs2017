import { compact, every, filter, flow, lowerCase, map, method, propertyOf } from 'lodash'
import { join, getOr } from 'lodash/fp'
import { selectForm } from 'redux-field'
import { createSelector } from 'reselect'

export const PREFIX = 'textSearch'
export function getPrefix(collectionId = 'default') {
  return [collectionId, PREFIX]
}

export function textSearch(searchValue) {
  return item =>
    every(compact(searchValue.split(' ')), searchTxt =>
      item.searchable.includes(searchTxt)
    )
}
export function searchItems(items, searchValue) {
  return (searchValue && filter(items, textSearch(searchValue))) || items
}
export const textSearchValue = collectionId => flow(
  selectForm, getOr('', getPrefix(collectionId).concat('value')), method('toLowerCase')
)

export const textSearchSelector = (itemsSelector, collectionId) => createSelector(
  itemsSelector, textSearchValue(collectionId), searchItems
)
export const arrayToSearch = flow(join(''), lowerCase)
export function makeSearchString(fieldIds) {
  return item => arrayToSearch(map(fieldIds, propertyOf(item)))
}
