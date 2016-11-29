import React, { PropTypes } from 'react'
import Icon from '../Icon'

function EditableButtons(props) {
  const {
    closeTxt, disabled, onClose, onSubmit, showClose, submitTxt,
  } = props
  return (
    <div className="editable-buttons">
      <button
        className="editable-submit"
        disabled={disabled}
        type="submit"
        title={submitTxt}
        onClick={onSubmit}
      >
        <span className="hidden">{submitTxt}</span>
        <Icon symbol="check" />
      </button>
      {showClose &&
        <button
          className="editable-close"
          type="button"
          title={closeTxt}
          onClick={onClose}
        >
          <span className="hidden">{closeTxt}</span>
          <Icon symbol="ban" />
        </button>
      }
    </div>
  )
}

EditableButtons.propTypes = {
  closeTxt: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  showClose: PropTypes.bool,
  submitTxt: PropTypes.string.isRequired,
}
EditableButtons.defaultProps = {
  closeTxt: 'Cancel',
  showClose: true,
  submitTxt: 'Submit',
}
export default EditableButtons
