import React, { PropTypes } from 'react'
import css from '../../style'
import './Student.css'
import Link from '../Link'

function StudentEl({ familyName, givenName, programName, show, url, email, facebook, instagram, soundcloud, twitter, vimeo, youtube }) {
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
      <span className="name"><strong>{ displayName }</strong></span>
      <span className="program">
        {/* <Link href="/details/SHOW-NAME" internal>{ programName }</Link> */}
        <i>{ programName }</i>
      </span>
      {/* <span className="show"> */}
        {/* {show && <Link href="/details/SHOW-NAME" internal>{ show.name }</Link>} */}
        {/* {show && <p>{ show.name } </p>} */}
      {/* </span> */}
      <span className="social">
        <div>
          {url && <Link href={url} icon="web" />}
          {email && <Link href={emailStr} icon="email" />}
          {facebook && <Link href={facebookStr} icon="facebook" />}
          {instagram && <Link href={instagramStr} icon="instagram" />}
          {soundcloud && <Link href={soundcloudStr} icon="soundcloud" />}
          {twitter && <Link href={twitterStr} icon="twitter" />}
          {vimeo && <Link href={vimeoStr} icon="vimeo" />}
          {youtube && <Link href={youtubeStr} icon="youtube" />}
        </div>
      </span>
    </li>
  )
}

StudentEl.propTypes = {
  familyName: PropTypes.string.isRequired,
  givenName: PropTypes.string.isRequired,
  programName: PropTypes.string.isRequired,
  show: PropTypes.object,
  url: PropTypes.string,
  email: PropTypes.string,
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  soundcloud: PropTypes.string,
  twitter: PropTypes.string,
  vimeo: PropTypes.string,
  youtube: PropTypes.string,
}
StudentEl.defaultProps = {
}
export default StudentEl
