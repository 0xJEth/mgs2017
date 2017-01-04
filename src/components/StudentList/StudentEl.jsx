import React, { PropTypes } from 'react'
import css from '../../style'
import './Student.css'
import Icon from '../Icon'
import Link from '../Link'

function StudentEl({ familyName, givenName, programName, show, social, website }) {
  const displayName = `${givenName} ${familyName}`
  return (
    <li className="student" style={css('p0p5 pl2 pr2 bb')}>
      <span className="name">{ displayName }</span>
      <span className="program">{ programName }</span>
      <span className="show">{show && <Link href="/details" internal>{ show.name }</Link>}</span>
      <span className="website">{ website }</span>
      <span className="social" style={css('textRight')}>
        {social &&
          <div>
            <Icon symbol="facebook" aria-hidden="true" />
            <Icon symbol="instagram" aria-hidden="true" />
            <Icon symbol="soundcloud" aria-hidden="true" />
            <Icon symbol="twitter" aria-hidden="true" />
            <Icon symbol="vimeo" aria-hidden="true" />
            <Icon symbol="youtube" aria-hidden="true" />
          </div>
        }
      </span>
    </li>
  )
}

StudentEl.propTypes = {
  familyName: PropTypes.string.isRequired,
  givenName: PropTypes.string.isRequired,
  programName: PropTypes.string.isRequired,
  show: PropTypes.object,
  social: PropTypes.array,
  website: PropTypes.string,
}
StudentEl.defaultProps = {
  familyName: 'Bjornard',
  givenName: 'Kristian',
  programName: 'MFA Graphic Design',
  show: 'Which show group, link to show details page',
  website: 'TK',
  social: [
    { facebook: '' },
    { instagram: 'bjornmeansbear' },
    { soundcloud: 'bjornmeansbear' },
    { twitter: 'bjornmeansbear' },
    { vimeo: 'bjornmeansbear' },
    { youtube: 'kristianbjornard' },
  ],
}
export default StudentEl
