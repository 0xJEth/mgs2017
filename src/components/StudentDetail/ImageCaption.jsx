import React, { PropTypes } from 'react'

function ImageCaption({ medium, sizeDisplay, title, year }) {
  return (
    <ul className="image-caption">
      <li className="title"><h3>{title}</h3></li>
      <li className="medium">{medium}</li>
      <li className="size-year">
        <span className="size">{sizeDisplay}</span>
        { sizeDisplay && year ?
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
    </ul>
  )
}

ImageCaption.propTypes = {
  medium: PropTypes.string,
  sizeDisplay: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number,
  ]),
}
ImageCaption.defaultProps = {
}

export default ImageCaption
