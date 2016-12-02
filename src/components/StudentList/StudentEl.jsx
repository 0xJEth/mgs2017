import React, { PropTypes } from 'react'
import css from '../../style'
import './Student.css'
import Icon from '../Icon'

function StudentEl({ familyName, givenName, programName, show, website }) {
  const displayName = `${givenName} ${familyName}`
  return (
    <li className="student clearfix" style={css('pt0p5 pb0p5 bb1')}>
      <span className="name">{ displayName }</span>
      <span className="program">{ programName }</span>
      <span className="website">{ website }</span>
      <span className="show"><a href="/details">{ show }</a></span>
      <span className="social text-right">
        <Icon symbol="facebook" className="mr0p5" aria-hidden="true" />
        <Icon symbol="instagram" className="mr0p5" aria-hidden="true" />
        <Icon symbol="twitter" aria-hidden="true" />
      </span>
    </li>
  )
}

StudentEl.propTypes = {
  familyName: PropTypes.string.isRequired,
  givenName: PropTypes.string.isRequired,
  programName: PropTypes.string.isRequired,
  show: PropTypes.string.isRequired,
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
