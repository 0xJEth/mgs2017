import React, { PropTypes } from 'react'
import { get } from 'lodash'
import css from '../../style'
import './Student.css'
import LinkEl from '../Link'
import Select from '../Editable/Select'

function StudentEl(props) {
  const {
    familyName, givenName, show, url, email, program, saveShow, shows, showGroupName,
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
      <span className="name"><strong>{ displayName }</strong></span>
      <span className="program">
        {/* <Link href="/details/SHOW-NAME" internal>{ programName }</Link> */}
        <i>{ program.name }</i>
      </span>
      <span className="show">
        {/* {show && <Link href="/details/SHOW-NAME" internal>{ show.name }</Link>} */}
        {show && <p>{ showGroupName } </p>}
        {shows && <Select options={shows} onChange={saveShow} value={get(show, 'id')} />}
      </span>
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

StudentEl.propTypes = {
  familyName: PropTypes.string.isRequired,
  givenName: PropTypes.string.isRequired,
  program: PropTypes.shape({
    name: PropTypes.string,
  }),
  show: PropTypes.shape({
    name: PropTypes.string,
  }),
  showGroupName: PropTypes.string,
  shows: PropTypes.objectOf(PropTypes.string),
  url: PropTypes.string,
  email: PropTypes.string,
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  saveShow: PropTypes.func.isRequired,
  soundcloud: PropTypes.string,
  twitter: PropTypes.string,
  vimeo: PropTypes.string,
  youtube: PropTypes.string,
}
StudentEl.defaultProps = {
}
export default StudentEl
