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
    <li className="student" style={css('p0p5 pl2 pr2 bb')}>
      {!name && <span className="name"><strong>{ displayName }</strong></span> }
      {name && <span className="name"><strong>{ name }</strong></span> }
      {program && <span className="program"><i>{ program.name }</i></span>}
      <span className="social">
        <div>
          {url && <LinkEl href={url} icon="web" />}
          {email && <LinkEl href={emailStr} icon="email" />}
          {facebook && <LinkEl href={facebookStr} icon="facebook" />}
          {instagram && <LinkEl href={instagramStr} icon="instagram" />}
          {soundcloud && <LinkEl href={soundcloudStr} icon="soundcloud" />}
          {twitter && <LinkEl href={twitterStr} icon="twitter" />}
          {vimeo && <LinkEl href={vimeoStr} icon="vimeo" />}
          {youtube && <LinkEl href={youtubeStr} icon="youtube" />}
        </div>
      </span>
    </li>
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
