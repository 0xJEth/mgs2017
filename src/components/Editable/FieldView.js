import { ary, flow, partial } from 'lodash'
import { pick } from 'lodash/fp'
import { connect } from 'react-redux'
import { mapDispatchToProps } from 'cape-redux'
import { getState, open } from 'redux-field'
import Component from './FieldView.jsx'

export const getStateProps = flow(getState, pick('value'))

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
  }
}
export default connect(getStateProps, getActions, mergeProps)(Component)
