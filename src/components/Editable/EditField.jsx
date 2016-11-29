import React, { PropTypes } from 'react'

import EditableButtons from './Buttons'
import Help from './Help'

// Manage help text.
// Bubble hasError (and value?) up.

function EditField(props) {
  const {
    className, hasError, errorMessage, help, id,
    onChange, onSubmit, preventClose, showButtons, suggestion, type, value,
  } = props

  const helpTxt = hasError ? errorMessage : help
  return (
    <div className={className}>
      <div className="editable-row">
        <input id={id} type={type} onChange={onChange} value={value} />
        {showButtons &&
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
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool.isRequired,
  help: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  preventClose: PropTypes.bool,
  showButtons: PropTypes.bool.isRequired,
  suggestion: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
}
EditField.defaultProps = {
  showButtons: true,
}
export default EditField
