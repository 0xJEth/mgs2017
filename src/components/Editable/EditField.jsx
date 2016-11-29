import React, { PropTypes } from 'react'

import EditableButtons from './Buttons'
import Help from './Help'

// Manage help text.
// Bubble hasError (and value?) up.

function EditField(props) {
  const {
    buttons, fieldEvent, formEvent, className, id, form, onSubmit, preventClose, type, ...other,
  } = props
  const { hasError, errorMessage, help, suggestion, value } = form
  const helpTxt = hasError ? errorMessage : help
  return (
    <div className={className}>
      <div className="editable-row">
        <input id={id} type={type} onChange={handleChange} value={value} />
        {buttons &&
          <EditableButtons
            handleSubmit={onSubmit}
            disabled={hasError}
            preventClose={preventClose}
          />
        }
      </div>
      {(helpTxt || suggestion) &&
        <Help
          help={helpTxt}
          hasErrors={hasError}
          id={id}
          suggestion={suggestion}
        />
      }
    </div>
  )
}

EditField.propTypes = {
  buttons: PropTypes.bool.isRequired,
  fieldEvent: PropTypes.object.isRequired,
  formEvent: PropTypes.object.isRequired,
  className: PropTypes.string,
  defaultValue: PropTypes.any,
  form: PropTypes.object.isRequired,
  help: PropTypes.string,
  id: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  preventClose: PropTypes.bool,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
}
EditField.defaultProps = {
  buttons: true,
}
export default EditField
