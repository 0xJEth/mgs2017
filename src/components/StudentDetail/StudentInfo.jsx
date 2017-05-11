import React from 'react'
import PropTypes from 'prop-types'
import css from 'cape-style'
import LinkEl from 'cape-mixer/lib/Link'

function StudentInfo(props) {
  const {
    familyName, givenName, name, url, email, program,
    facebook, instagram, soundcloud, twitter, vimeo, youtube,
  } = props
  const displayName = `${givenName} ${familyName}`
  const emailStr = `mailto:${email}`
  const facebookStr = `https://www.facebook.com/${facebook}`
  const instagramStr = `https://www.instagram.com/${instagram}`
  const soundcloudStr = `https://www.soundcloud.com/${soundcloud}`
  const twitterStr = `https://www.twitter.com/${twitter}`
  const vimeoStr = `https://www.vimeo.com/${vimeo}`
  const youtubeStr = `https://www.youtube.com/${youtube}`

  return (
    <ul className="studentInfo" style={css('m0 p0 lsNone')}>
      {!name && <li className="name"><h2>{ displayName }</h2></li> }
      {name && <li className="name"><h2>{ name }</h2></li> }
      {program && <li className="program"><i>{ program.name }</i></li>}
      <li className="social">
        <ul style={css('m0 p0 lsNone')}>
          {url && <li><LinkEl href={url} icon="web" /></li>}
          {email && <li><LinkEl href={emailStr} icon="email" /></li>}
          {facebook && <li><LinkEl href={facebookStr} icon="facebook" /></li>}
          {instagram && <li><LinkEl href={instagramStr} icon="instagram" /></li>}
          {soundcloud && <li><LinkEl href={soundcloudStr} icon="soundcloud" /></li>}
          {twitter && <li><LinkEl href={twitterStr} icon="twitter" /></li>}
          {vimeo && <li><LinkEl href={vimeoStr} icon="vimeo" /></li>}
          {youtube && <li><LinkEl href={youtubeStr} icon="youtube" /></li>}
        </ul>
      </li>
    </ul>
  )
}

StudentInfo.propTypes = {
  email: PropTypes.string.isRequired,
  facebook: PropTypes.string,
  familyName: PropTypes.string.isRequired,
  givenName: PropTypes.string.isRequired,
  instagram: PropTypes.string,
  name: PropTypes.string.isRequired,
  program: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  soundcloud: PropTypes.string,
  twitter: PropTypes.string,
  url: PropTypes.string,
  vimeo: PropTypes.string,
  youtube: PropTypes.string,
}
StudentInfo.defaultProps = {
  facebook: null,
  instagram: null,
  soundcloud: null,
  twitter: null,
  url: null,
  vimeo: null,
  youtube: null,
}
export default StudentInfo
