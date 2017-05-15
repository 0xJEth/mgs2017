import React, { PropTypes } from 'react'
import classnames from 'classnames'

import Video from './Video'

function SlideThumb({ classNames, src, title, handleClick, videoInfo }) {
  return (
    <li className={classnames(classNames)}>
      { videoInfo && videoInfo.url ? <Video {...videoInfo} /> : (
        <img
          src={src + '?w=1200'}
          title={title}
          alt={title}
          onClick={handleClick}
        />
      )}
    </li>
  )
}

SlideThumb.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  classNames: PropTypes.object,
  handleClick: PropTypes.func,
  videoInfo: PropTypes.object,
}

export default SlideThumb
