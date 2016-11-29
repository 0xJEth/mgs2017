import { flow, negate } from 'lodash'
import { connect } from 'react-redux'
import { getState } from 'redux-field'
import Component from './Field.jsx'

// Only deal with the state needed to build Group and View or Edit.

export function showPreview({ isOpen, isSaving }) {
  return isSaving || !isOpen
}
export const showEdit = negate(showPreview)

export const getStateProps = flow(getState, fieldState => ({
  isEditable: !fieldState.isSaving,
  showPreview: showPreview(fieldState),
  showEdit: showEdit(fieldState),
}))
export default connect(getStateProps)(Component)
