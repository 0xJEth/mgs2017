import { flow, negate } from 'lodash'
import { connect } from 'react-redux'
import { getState } from 'redux-field'
import Component from './Field.jsx'

// Only deal with the state needed to build Group and View or Edit.

// Define if we should show the (FieldView) preview text/button.
export function showPreview({ isOpen, isSaving }) {
  return isSaving || !isOpen
}
// When showPreview false we want to show Edit.
export const showEdit = negate(showPreview)

// Add in the props we will pull out and use in Field.jsx component.
export const getStateProps = flow(getState, fieldState => ({
  isEditable: !fieldState.isSaving,
  showPreview: showPreview(fieldState),
  showEdit: showEdit(fieldState),
}))
export default connect(getStateProps)(Component)
