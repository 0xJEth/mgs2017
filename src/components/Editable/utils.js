import { negate, overSome, property } from 'lodash'

export function isEditable({ id, isSaving }, props) {
  return !isSaving && (!id || id === props.id)
}
export const isStatic = negate(isEditable)

// Define if we should show the (FieldView) preview text/button.
export const showPreview = overSome(isStatic, property('isSaving'), negate(property('isOpen')))
// When showPreview false we want to show Edit.
export const showEdit = negate(showPreview)

export function getFieldId({ prefix, id }) {
  return Array.prototype.concat(prefix).concat([id]).join('-')
}
