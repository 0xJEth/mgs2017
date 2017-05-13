import { constant, flow } from 'lodash'
import {
  createHistory, findDifferentPage, parseUrl, restoreHistory, selectHistoryState,
} from 'redux-history-sync'
import { thunkSelectorAction } from 'cape-redux'

export function isDifferentPage({ location: { pathname } }) {
  return !pathname.startsWith('/students/')
}
export const defaultBackPage = parseUrl('/students')
export const findPrevDifferent = flow(selectHistoryState, findDifferentPage(isDifferentPage))

export function closePage(state) {
  const previous = findPrevDifferent(state, isDifferentPage)
  if (previous) return restoreHistory(previous.id, false)
  return createHistory(defaultBackPage)
}
export const closePopup = constant(thunkSelectorAction(closePage))
