import React, { PropTypes } from 'react'
import css from '../../style'
import './Detail.css'

function DetailEl({ gallery, program, receptionDate, showDate, showName }) {
  return (
    <detail style={css('w100 h100 relative block')}>
      <a href="/" className="close" style={css('absolute block top1 left1')}>
        <i className="fa fa-close-circle-outline fa-2x black" />
      </a>
      <flex>
        <flex style={css('p2 pt4 pb4')}>
          <div>
            <h1>{ showName }</h1>
            <p className="dateRange">{ showDate }</p>
            <h2 style={css('m0 mt2')}>Reception</h2>
            <p>{ receptionDate }</p>
            <h2 style={css('m0 mt2')}>Includes</h2>
            <ul style={css('lsNone m0 p0')}>
              <li>
                <h3 style={css('m0 mb0p5')}>{ program }</h3>
                <p>{ gallery }</p>
              </li>
            </ul>
          </div>
          <div style={css('selfEnd')}>
            <p>list of students?</p>
            <ul style={css('lsNone m0 p0')}>
              <li>
                <p style={css('m0')}>Student Names / Programs???</p>
              </li>
              <li>
                <p style={css('m0')}>Student Names / Programs???</p>
              </li>
              <li>
                <p style={css('m0')}>Student Names / Programs???</p>
              </li>
              <li>
                <p style={css('m0')}>Student Names / Programs???</p>
              </li>
              <li>
                <p style={css('m0')}>Student Names / Programs???</p>
              </li>
              <li>
                <p style={css('m0')}>Student Names / Programs???</p>
              </li>
              <li>
                <p style={css('m0')}>Student Names / Programs???</p>
              </li>
              <li>
                <p style={css('m0')}>Student Names / Programs???</p>
              </li>
              <li>
                <p style={css('m0')}>Student Names / Programs???</p>
              </li>
              <li>
                <p style={css('m0')}>Student Names / Programs???</p>
              </li>
              <li>
                <p style={css('m0')}>Student Names / Programs???</p>
              </li>
            </ul>
          </div>
        </flex>
        <div style={css('relative')}>
          <iframe className="map" style={css('top0 right0 bottom0 absolute')} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB5Ls4YpQRd3Pc6nDpWbc-Hsr0UYT_L90E&q=MICA,Baltimore+MD" />
        </div>
      </flex>
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
