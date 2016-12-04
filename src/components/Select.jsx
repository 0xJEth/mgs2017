import React, { PropTypes } from 'react'
import classnames from 'classnames'
import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'
import map from 'lodash/map'

function SelectOption({ value, name, active }) {
  return (
    <option className={classnames({ active })} value={value}>
      {name}
    </option>
  )
}
SelectOption.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}
SelectOption.defaultProps = {
  value: '',
}

function opts(arg) {
  if (isString(arg)) return { value: arg, name: arg }
  if (isNumber(arg)) return { value: arg.toString(), name: arg.toString() }
  return arg
}

function Select({ firstOptionName, options, value, required, ...props }) {
  if (!options.length) return <div>NO OPTIONS</div>
  return (
    <select
      {...props}
      value={value}
    >
      {!required && <SelectOption name={firstOptionName} />}
      {map(options, (opt) => {
        const optionDetails = opts(opt)
        return (<SelectOption
          {...optionDetails}
          active={value === optionDetails.value}
          key={optionDetails.value}
        />)
      })}
    </select>
  )
}

Select.propTypes = {
  firstOptionName: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  required: PropTypes.bool,
}
Select.defaultProps = {
  firstOptionName: '- All -',
  value: '',
}
export default Select
