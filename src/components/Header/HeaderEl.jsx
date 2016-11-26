import React, { PropTypes } from 'react'
import css from '../../style'
import './Header.css'

function HeaderEl() {
  return (
    <header style={css('mb2 p1 bb1')}>
      <nav className="clearfix">
        <ul style={css('lsNone m0 p0')}>
          <li className="left">
            <button id="scheduleButton" style={css('fs2 m0 p1 b1 br1')}>Schedule</button>
          </li>
          <li className="right">
            <button id="studentButton" style={css('fs2 m0 p1 b1 br1')}>Students</button>
          </li>
        </ul>
        <h1 className="text-center" style={css('fs2 m0 pt1 br1')}>MICA Grad Show 2017</h1>
      </nav>
    </header>
  )
}
HeaderEl.defaultProps = {
}
HeaderEl.propTypes = {
}
export default HeaderEl
