import React from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'
import css from 'cape-style'
import LinkEl from 'cape-mixer/lib/Link'
import Select from 'cape-mixer/lib/SelectEl'
// import './Student.css'
import { getLink } from '../Schedule/ShowGroup'
import StudentLink from '../StudentLink'

function StudentEl(props) {
  const {
    detailUrl, id, name, show, url, email, program, saveShow, shows, showGroup,
    facebook, instagram, soundcloud, twitter, vimeo, youtube,
  } = props
  const emailStr = `mailto:${email}`
  const facebookStr = `https://www.facebook.com/${facebook}`
  const instagramStr = `https://www.instagram.com/${instagram}`
  const soundcloudStr = `https://www.soundcloud.com/${soundcloud}`
  const twitterStr = `https://www.twitter.com/${twitter}`
  const vimeoStr = `https://www.vimeo.com/${vimeo}`
  const youtubeStr = `https://www.youtube.com/${youtube}`

  return (
    <li className="student" style={css('p0p5 pl2 pr2 bb')} id={id}>
      <span className="name">
        <StudentLink detailUrl={detailUrl}><strong>{ name }</strong></StudentLink>
      </span>
      <span className="program">
        <i>{ program.name }</i>
      </span>
      <span className="show">
        {show && <p><LinkEl href={getLink(showGroup)} internal>{ showGroup.name }</LinkEl></p>}
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
  detailUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  program: PropTypes.shape({
    name: PropTypes.string,
  }),
  show: PropTypes.shape({
    name: PropTypes.string,
  }),
  showGroup: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
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
