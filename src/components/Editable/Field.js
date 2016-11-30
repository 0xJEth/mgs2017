import { connect } from 'react-redux'
import { getState } from 'redux-field'
import { isActive, isEditable, showEdit, showPreview } from './utils'
import Component from './FieldEl'

// Expected Props
// ['description', id', 'initialValue', 'isRequired', 'name', 'prefix', 'type', 'validate']

// Only deal with the state needed to build Group and decide on View or Edit display.

// Add in the props we will pull out and use in Field.jsx component.
export function getStateProps(state, props) {
  const fieldState = getState(state, props)
  return {
    isActive: isActive(fieldState, props),
    isEditable: isEditable(fieldState, props),
    showPreview: showPreview(fieldState, props),
    showEdit: showEdit(fieldState, props),
  }
}

export default connect(getStateProps)(Component)
