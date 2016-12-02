import React, { PropTypes } from 'react'
import { partial } from 'lodash'
import classNames from 'classnames'
import './FieldHelp.css'

// A simple span that displays help text.
// Optional class added when help is related to an error.
function Help({ help, hasErrors, id, suggestion, onChange }) {
  const preTxt = 'Do you mean '
  const postTxt = '? '

  const className = classNames('help-block', {
    'validation-message': hasErrors,
  })

  return (
    <p className={className} id={`${id}-helpBlock`}>
      {suggestion &&
        <span>
          {preTxt}
          <button onClick={partial(onChange, suggestion)}>
            {suggestion}
          </button>
          {postTxt}
        </span>
      }
      {help}
    </p>
  )
}

Help.propTypes = {
  help: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  hasErrors: PropTypes.bool,
  onChange: PropTypes.func,
  suggestion: PropTypes.string,
}

export default Help
