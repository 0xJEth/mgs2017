import React, { PropTypes } from 'react'
import Link from 'redux-history-component'
import css from 'cape-style'
// import Icon from './Icon'

function ArtEdit({ id, isActive, onDelete, title, url }) {
  const style = isActive ? css('ba bw0p125') : null
  return (
    <li key={id} style={style}>
      <Link href={`/me/${id}`}>
        <span>{title || 'Untitled'}</span>
        {url && <img src={`${url}?w=300`} alt={title} />}
      </Link>
      {onDelete && <button onClick={onDelete}>Delete</button>}
    </li>
  )
}
ArtEdit.propTypes = {
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
}
ArtEdit.defaultProps = {
  title: 'View',
}
export default ArtEdit
