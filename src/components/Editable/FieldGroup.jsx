import React, { PropTypes } from 'react'
import classnames from 'classnames'

// Outside wrapper for an editable field.
export function formClassName(className, editing, status) {
  const cssClasses = {
    editing,
    'has-error': (status === 'error'),
    'has-success': (status === 'success'),
    'has-warning': (status === 'warning'),
    'has-feedback': status,
  }
  return classnames('editable-field', cssClasses, className)
}
export function getId(id) {
  return `${id}-group`
}
// Editable formGroup wrapper.
function FormGroup(props) {
  const {
    children, className, isEditing, id, name, onSubmit, isRequired,
    isSaving, savingTxt, status, value,
  } = props

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit(value)
  }
  const formStyle = formClassName(className, isEditing, status)
  return (
    <form className={formStyle} id={getId(id)} onSubmit={handleSubmit}>
      {name &&
        <label className="control-label" htmlFor={id}>
          {name}{isRequired ? '*' : false}
          {children}
          {isSaving && <span className="field-saving small mono">{savingTxt}</span>}
        </label>
      }
    </form>
  )
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired, // The input field.
  className: PropTypes.string, // Optional className given to container.
  // errorMessage: PropTypes.string,
  id: PropTypes.string.isRequired, // Used for a form id.
  isEditing: PropTypes.bool.isRequired, // Used in css classes.
  name: PropTypes.string, // The label.
  onSubmit: PropTypes.func.isRequired, // Capture the submit event.
  isRequired: PropTypes.bool,
  isSaving: PropTypes.bool,
  savingTxt: PropTypes.string.isRequired,
  status: PropTypes.string,
  value: PropTypes.string,
}

FormGroup.defaultProps = {
  savingTxt: 'Saving...',
  wrapClass: 'form-horizontal',
}

export default FormGroup
