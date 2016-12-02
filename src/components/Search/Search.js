import { connect } from 'react-redux'
import { partial } from 'lodash'
import { mapDispatchToProps } from 'cape-redux'
import { getFieldValue, onChange } from 'redux-field'
import Component from './SearchEl'

export const PREFIX = 'textSearch'
export function getPrefix(collectionId = 'default') {
  return [collectionId, PREFIX]
}
function getState(state, { collectionId }) {
  return {
    value: getFieldValue(state, getPrefix(collectionId)),
  }
}
function getActions({ collectionId }) {
  return {
    onChange: partial(onChange, getPrefix(collectionId)),
  }
}
export default connect(getState, mapDispatchToProps(getActions))(Component)
