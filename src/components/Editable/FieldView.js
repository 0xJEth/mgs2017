import { ary, partial } from 'lodash'
import { connect } from 'react-redux'
import { mapDispatchToProps } from 'cape-redux'
import { getState, onSubmit } from 'redux-field'
import { getFieldId, isActive } from './utils'
import Component from './FieldGroup.jsx'

export function getStateProps(state, props) {
  const fieldState = getState(state)
  return {
    id: getFieldId(props),
    isActive: isActive(fieldState, props),
    isSaving: fieldState.isSaving,
    status: fieldState.status,
    value: fieldState.value,
  }
}
const getActions = mapDispatchToProps(({ prefix }) => ({
  onSubmit: partial(onSubmit, prefix),
}))

// Only create a submit handler when the form is active.
export function getSubmitHandler(stateProps, dispatchProps) {
  if (!stateProps.isActive) return undefined
  // This would be the place to add an additional onSubmit handler.
  // Propbably want to use middleware to listen to this action instead?
  return ary(partial(dispatchProps.onSubmit, stateProps.value))
}
function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...ownProps,
    ...stateProps,
    onSubmit: getSubmitHandler(stateProps, dispatchProps),
  }
}
export default connect(getStateProps, getActions, mergeProps)(Component)
