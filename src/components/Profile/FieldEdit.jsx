import React, { PropTypes } from 'react'
import { map, partial } from 'lodash'
import { clear, getState, onChange, save } from 'redux-field'
import { connect } from 'react-redux'
import { mapDispatchToProps } from 'cape-redux'
import Button from '../Button'

function FieldEdit({ clearField, handleChange, id, name, onSubmit, type, value }) {
  function handleSubmit(event) {
    event.preventDefault()
    clearField()
    onSubmit(value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={id}>
          {name}
          <input id={id} type={type} onChange={handleChange} value={value} />
        </label>
        {value && <input type="submit" value="Submit" className="bg-gold b0 ml0p25 white" />}
      </form>
      <Button onClick={clearField} icon="times-btl" className="top-1 right-0" />
    </div>
  )
}

FieldEdit.propTypes = {
  clearField: PropTypes.func.isRequired,
  fields: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
}
FieldEdit.defaultProps = {
}

function getActions({ prefix }) {
  return {
    clearField: partial(clear, prefix),
    handleChange: partial(onChange, prefix),
    onSubmit: partial(save, prefix),
  }
}
export default connect(getState, mapDispatchToProps(getActions))(FieldEdit)
