import React, { PropTypes } from 'react'

import EditableButtons from './FieldButtons'
import Help from './FieldHelp'

// Manage help text.
// Bubble hasError (and value?) up.

function EditField(props) {
  const {
    className, description, hasError, errorMessage, id,
    onChange, onClose, preventClose, showButtons, suggestion, type, value,
  } = props

  const helpTxt = hasError ? errorMessage : description
  return (
    <div className={className}>
      <div className="editable-row">
        <input id={id} type={type} onChange={onChange} value={value || ''} />
        {showButtons &&
          <EditableButtons
            disabled={hasError}
            onClose={onClose}
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
  className: PropTypes.string,
  description: PropTypes.string,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  preventClose: PropTypes.bool,
  showButtons: PropTypes.bool.isRequired,
  suggestion: PropTypes.string,
  type: PropTypes.oneOf([
    'email',
    'dateTime',
    'fullName',
    'select',
    'text',
    'textarea',
    'url',
  ]).isRequired,
  value: PropTypes.string,
}
EditField.defaultProps = {
  showButtons: true,
}
export default EditField
