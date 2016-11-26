import React, { PropTypes } from 'react'
import css from '../../style'
import './Detail.css'

function DetailEl() {
  return (
    <detail>
      <div className="group relative">
        <div className="six columns" style={css('h100vh')}>
          <div className="inner-wrap">
            <h1>Teaching</h1>
            <p className="dateRange">February 26–March 13, 2017</p>
            <h2>Reception</h2>
            <p>Friday, February 26, 5–7 pm</p>
            <h2>Includes</h2>
            <ul>
              <li>
                <h3>Teaching, MA</h3>
                <p>Sheila & Richard Riggs Gallery</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="six columns relative" style={css('h100vh')}>
          <iframe className="absolute map" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB5Ls4YpQRd3Pc6nDpWbc-Hsr0UYT_L90E&q=MICA,Baltimore+MD" />
        </div>
      </div>
    </detail>
  )
}
DetailEl.defaultProps = {
}
DetailEl.propTypes = {
}
export default DetailEl
