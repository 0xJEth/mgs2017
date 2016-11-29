import { negate, overEvery, overSome, property } from 'lodash'

export function isActive(fieldState, props) {
  return fieldState.id === props.id
}
export const isEditable = overEvery(
  negate(property('isSaving')),
  overSome(negate(property('id')), isActive)
)
export const isStatic = negate(isEditable)

// Define if we should show the (FieldView) preview text/button.
export const showPreview = overSome(isStatic, property('isSaving'), negate(property('isOpen')))
// When showPreview false we want to show Edit.
export const showEdit = negate(showPreview)

export function getFieldId({ prefix, id }) {
  return Array.prototype.concat(prefix).concat([id]).join('-')
}
