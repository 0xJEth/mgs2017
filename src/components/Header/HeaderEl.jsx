import React, { PropTypes } from 'react'
import css from '../../style'
import './Header.css'

function HeaderEl({ siteName }) {
  return (
    <header className="p1 mb2">
      <nav className="clearfix">
        <ul className="ls-none m0 p0">
          <li className="fl">
            <button id="scheduleButton" className="fs1 m0 p1 b0 brad2 bg-yellow">
              <a href="/">Schedule</a>
            </button>
          </li>
          <li className="fr">
            <button id="studentButton" className="fs1 m0 p1 b0 brad2 bg-yellow">
              <a href="/students">Students</a>
            </button>
          </li>
        </ul>
        <h1 className="text-center" style={css('fs2 m0 pt0p5')}>{siteName}</h1>
      </nav>
    </header>
  )
}
HeaderEl.propTypes = {
  siteName: PropTypes.string,
}
HeaderEl.defaultProps = {
  siteName: 'MICA Grad Show 2017',
}
export default HeaderEl
