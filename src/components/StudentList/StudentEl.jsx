import React, { PropTypes } from 'react'
import css from '../../style'
import './Student.css'
import Icon from '../Icon'
import Link from '../Link'

function StudentEl({ familyName, givenName, programName, show, website }) {
  const displayName = `${givenName} ${familyName}`
  return (
    <li className="student" style={css('p0p5 pl2 pr2 bb')}>
      <span className="name">{ displayName }</span>
      <span className="program">{ programName }</span>
      <span className="website">{ website }</span>
      {show && <span className="show"><Link href="/details" internal>{ show.name }</Link></span>}
      <span className="social" style={css('textRight')}>
        <Icon symbol="facebook" aria-hidden="true" />
        <Icon symbol="instagram" aria-hidden="true" />
        <Icon symbol="twitter" aria-hidden="true" />
      </span>
    </li>
  )
}

StudentEl.propTypes = {
  familyName: PropTypes.string.isRequired,
  givenName: PropTypes.string.isRequired,
  programName: PropTypes.string.isRequired,
  show: PropTypes.object,
  website: PropTypes.string.isRequired,
}
StudentEl.defaultProps = {
  familyName: 'Bjornard',
  givenName: 'Kristian',
  programName: 'MFA Graphic Design',
  show: 'Name? Date? Opening?',
  website: 'www.ookb.co',
}
export default StudentEl
