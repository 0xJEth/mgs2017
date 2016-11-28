import React, { PropTypes } from 'react'
import css from '../../style'
import './Detail.css'

function DetailEl({ gallery, program, receptionDate, showDate, showName }) {
  return (
    <detail className="text-left">
      <div className="clearfix relative">
        <div style={css('h100vh w50 fl')}>
          <div className="inner" style={css('p2')}>
            <h1>{ showName }</h1>
            <p className="dateRange">{ showDate }</p>
            <h2>Reception</h2>
            <p>{ receptionDate }</p>
            <h2>Includes</h2>
            <ul style={css('lsnone m0 p0')}>
              <li>
                <h3>{ program }</h3>
                <p>{ gallery }</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative" style={css('h100vh w50 fl')}>
          <iframe className="absolute map" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB5Ls4YpQRd3Pc6nDpWbc-Hsr0UYT_L90E&q=MICA,Baltimore+MD" />
        </div>
      </div>
    </detail>
  )
}
DetailEl.propTypes = {
  gallery: PropTypes.string.isRequired,
  program: PropTypes.string.isRequired,
  receptionDate: PropTypes.string.isRequired,
  showDate: PropTypes.string.isRequired,
  showName: PropTypes.string.isRequired,
}
DetailEl.defaultProps = {
  gallery: 'Sheila & Richard Riggs Gallery',
  program: 'Teaching, MA',
  receptionDate: 'Friday, February 26, 5–7 pm',
  showDate: 'February 26–March 13, 2017',
  showName: 'Teaching',
}
export default DetailEl
