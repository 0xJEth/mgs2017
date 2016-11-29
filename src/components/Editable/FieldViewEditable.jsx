import React, { PropTypes } from 'react'
// The button that gets clicked for simple editable text fields.

export const styles = {
  base: {
    background: 'transparent',
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
    borderBottom: '1px dashed currentColor',
    borderRadius: 0,
    color: 'rgba(061,060,057,1)',
    fontSize: '.9em',
    lineHeight: '1.2rem',
    padding: '0',
    textDecoration: 'none',
    textAlign: 'left',
    ':hover': {
      color: 'rgba(130,151,177,1)',
    },
    ':focus': {
      outline: 'none',
      color: 'rgba(130,151,177,1)',
    },
    ':active': {
      outline: 'none',
      color: 'rgba(130,151,177,1)',
    },
  },
  empty: {
    color: 'rgba(189,151,119,1)',
  },
}

function PreviewTextEditable({ className, emptyText, title, value, onClick, style }) {
  return (
    <button
      className={className}
      onClick={onClick}
      style={style}
      title={title}
      type="button"
    >
      {value || emptyText}
    </button>
  )
}
PreviewTextEditable.defaultProps = {
  className: 'btn btn-secret',
  title: 'Click to edit',
}
PreviewTextEditable.propTypes = {
  className: PropTypes.string,
  emptyText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  title: PropTypes.string,
  value: PropTypes.string,
}

export default PreviewTextEditable
