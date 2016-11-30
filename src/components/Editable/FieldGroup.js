import { flow, partial } from 'lodash'
import { connect } from 'react-redux'
import { mapDispatchToProps } from 'cape-redux'
import { getState, onSubmit } from 'redux-field'
import { getFieldId } from './utils'
import Component from './FieldGroupEl'

export function getStateProps(state, props) {
  const fieldState = getState(state, props)
  return {
    id: getFieldId(props),
    isSaving: props.isActive && fieldState.isSaving,
    status: fieldState.status,
    value: fieldState.value,
  }
}
const getActions = mapDispatchToProps(({ prefix }) => ({
  onSubmit: partial(onSubmit, prefix),
}))
export function preventDefault(event) {
  if (event && event.preventDefault) event.preventDefault()
}
// Only create a submit handler when the form is active.
export function getSubmitHandler(stateProps, dispatchProps, ownProps) {
  if (!ownProps.isActive) return undefined
  // This would be the place to add an additional onSubmit handler.
  // Propbably want to use middleware to listen to this action instead?
  return flow(preventDefault, partial(dispatchProps.onSubmit, stateProps.value))
}
function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...ownProps,
    ...stateProps,
    onSubmit: getSubmitHandler(stateProps, dispatchProps, ownProps),
  }
}
export default connect(getStateProps, getActions, mergeProps)(Component)
