import { connect } from 'react-redux'
import { partial } from 'lodash'
import { mapDispatchToProps } from 'cape-redux'
import { onChange } from 'redux-field'
import Component from './SearchEl'
import { getPrefix, textSearchValue } from './index'

function getState(state, { collectionId }) {
  return {
    value: textSearchValue(collectionId)(state),
  }
}
function getActions({ collectionId }) {
  return {
    onChange: partial(onChange, getPrefix(collectionId)),
  }
}
export default connect(getState, mapDispatchToProps(getActions))(Component)
