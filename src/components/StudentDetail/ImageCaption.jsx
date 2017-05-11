import React from 'react'
import PropTypes from 'prop-types'
// import css from 'cape-style'

function ImageCaption({ description, medium, size, title, year }) {
  return (
    <ul className="image-caption">
      <li className="title"><h3>{title}</h3></li>
      <li className="medium">{medium}</li>
      <li className="size-year">
        <span className="size">{size}</span>
        { size && year ?
          <span>, </span>
          :
          false
        }
        {
          year ?
            <span className="year">{year}</span>
          :
            false
        }
      </li>
      <li className="description">
        <p>{description}</p>
      </li>
    </ul>
  )
}

ImageCaption.propTypes = {
  description: PropTypes.string.isRequired,
  medium: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
}
ImageCaption.defaultProps = {
}

export default ImageCaption
