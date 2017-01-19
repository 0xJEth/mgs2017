import { find } from 'lodash'
import {
  createHistory, parseUrl, restoreHistory, selectHistoryState, selectActiveKey,
} from 'redux-history-sync'

export function selectPrevious(state) {
  const historyState = selectHistoryState(state)
  const active = selectActiveKey(historyState)
  if (historyState.length < 2) return null
  return find(historyState.key, { index: active.index - 1 })
}

export const collectionLocation = parseUrl('/')

export function closeDetail(state) {
  const previous = selectPrevious(state)
  // console.log(previous)
  if (previous) return restoreHistory(previous.id, false)
  return createHistory(collectionLocation)
}

export function detailClose() {
  return (dispatch, getState) => {
    const state = getState()
    const action = closeDetail(state)
    dispatch(action)
  }
}
