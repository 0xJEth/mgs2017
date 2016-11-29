import { ary, partial } from 'lodash'
import { pick } from 'lodash/fp'
import { connect } from 'react-redux'
import { mapDispatchToProps } from 'cape-redux'
import { open } from 'redux-field'
import Component from './FieldViewEl'

const getActions = mapDispatchToProps(({ prefix }) => ({
  onClick: partial(open, prefix),
}))

const openPayload = pick(['id', 'initialValue'])
// Only create a handler when the form is editable.
export function getHandler(stateProps, dispatchProps, ownProps) {
  if (!ownProps.isEditable) return undefined
  return ary(partial(dispatchProps.onClick, openPayload(ownProps)))
}
function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...ownProps,
    ...stateProps,
    onClick: getHandler(stateProps, dispatchProps, ownProps),
    value: ownProps.initialValue,
  }
}
export default connect(null, getActions, mergeProps)(Component)
