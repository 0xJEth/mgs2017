import React, { PropTypes } from 'react'
import Link from 'redux-history-component'
import css from 'cape-style'
// import Icon from './Icon'

function ArtEdit({ id, isActive, onDelete, title, image }) {
  const style = isActive ? css('ba bw0p25 bgGray') : null
  return (
    <li className="artwork" key={id} style={style}>
      <Link href={`/me/${id}`} style={css('block flex')}>
        {image && image.url && <img src={`${image.url}?w=100`} alt={title} />}
        <p style={css('ml1')}>{title || 'Untitled'}</p>
      </Link>
      {onDelete && <button className="delete" onClick={onDelete}><i className="fa fa-trash-o fa-2x"></i></button>}
    </li>
  )
}
ArtEdit.propTypes = {
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  title: PropTypes.string,
  image: PropTypes.shape({ url: PropTypes.string.isRequired }),
}
ArtEdit.defaultProps = {
  image: null,
  title: 'View',
}
export default ArtEdit
