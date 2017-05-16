import React from 'react'
import PropTypes from 'prop-types'
// import css from 'cape-style'

function getSrc(provider, url) {
  let src = ''
  switch (provider) {
    case 'Vimeo':
      src = `https://player.vimeo.com/video${url.pathname}`
      break
    case 'YouTube':
      src = `https://www.youtube.com/embed/${url.query.v}`
      break
    default:
      break
  }
  return src
}

function Video({ provider, url, ...rest }) {
  const src = getSrc(provider, url)
  return (
    <div className="videoContainer">
      <iframe {...rest} src={src} />
    </div>
  )
}

Video.propTypes = {
  provider: PropTypes.string.isRequired,
  url: PropTypes.shape({
    pathname: PropTypes.string,
    query: PropTypes.object,
  }).isRequired,
}
Video.defaultProps = {
  frameBorder: '0',
  allowFullScreen: true,
}

export default Video
