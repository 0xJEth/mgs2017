import React, { PropTypes } from 'react'
import classnames from 'classnames'

// Outside wrapper for an editable field.
export function formClassName(className, editing, status) {
  const cssClasses = {
    editing,
    'form-group': true,
    'has-error': (status === 'error'),
    'has-success': (status === 'success'),
    'has-warning': (status === 'warning'),
    'has-feedback': status,
  }
  return classnames(cssClasses, className)
}
// Editable formGroup wrapper.
function FormGroup(props) {
  const {
    children, className, editing, id, name, onSubmit, required,
    wrapClass, saving, savingTxt, status, value,
  } = props

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit(value)
  }
  const formStyle = formClassName(className, editing, status)
  return (
    <div className={classnames('editable-field', wrapClass)}>
      <form className={formStyle} id={`${id}-group`} onSubmit={handleSubmit}>
        {name &&
          <label className="control-label" htmlFor={id}>
            {name}
            {required ? '*' : false}
            {children}
          </label>
        }
        {saving && <span className="saving small mono">{savingTxt}</span>}
      </form>
    </div>
  )
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  editing: PropTypes.bool.isRequired,
  // errorMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  required: PropTypes.bool,
  saving: PropTypes.bool,
  savingTxt: PropTypes.string.isRequired,
  status: PropTypes.string,
  value: PropTypes.string,
  wrapClass: PropTypes.string,
}

FormGroup.defaultProps = {
  savingTxt: 'Saving...',
  wrapClass: 'form-horizontal',
}

export default FormGroup
