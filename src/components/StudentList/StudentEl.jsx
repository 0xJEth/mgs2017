import React, { PropTypes } from 'react'
import css from '../../style'
import './Student.css'

function StudentEl({ displayName, program, website }) {
  return (
    <li className="student clearfix" style={css('pt0p5 pb0p5 bt1')}>
      <span className="name">{ displayName }</span>
      <span className="program">{ program }</span>
      <span className="website">{ website }</span>
      <span className="social">
        <i className="fa fa-facebook" aria-hidden="true" />
        <i className="fa fa-instagram" aria-hidden="true" />
        <i className="fa fa-twitter" aria-hidden="true" />
      </span>
    </li>
  )
}

StudentEl.propTypes = {
  displayName: PropTypes.string.isRequired,
  program: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
}
StudentEl.defaultProps = {
  displayName: 'Kristian Bjornard',
  program: 'MFA Graphic Design',
  website: 'www.ookb.co',
}
export default StudentEl
