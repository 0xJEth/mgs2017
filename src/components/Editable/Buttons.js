import React, { PropTypes } from 'react'
import Icon from '../Icon'

function EditableButtons(props) {
  const {
    closeTxt, disabled, handleSubmit, onSubmit, close, preventClose, submitTxt, value,
  } = props
  function onClick(event) {
    event.preventDefault()
    onSubmit(value)
    if (handleSubmit) handleSubmit(value)
  }
  return (
    <div className="editable-buttons">
      <button
        className="editable-submit"
        disabled={disabled}
        type="submit"
        title={submitTxt}
        onClick={onClick}
      >
        <span className="hidden">{submitTxt}</span>
        <Icon symbol="check" />
      </button>
      {!preventClose &&
        <button
          className="editable-close"
          type="button"
          title={closeTxt}
          onClick={close}
        >
          <span className="hidden">{closeTxt}</span>
          <Icon symbol="ban" />
        </button>
      }
    </div>
  )
}

EditableButtons.propTypes = {
  close: PropTypes.func,
  closeTxt: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  preventClose: PropTypes.bool,
  submitTxt: PropTypes.string.isRequired,
  value: PropTypes.any,
}
EditableButtons.defaultProps = {
  closeTxt: 'Cancel',
  submitTxt: 'Submit',
}
export default EditableButtons
