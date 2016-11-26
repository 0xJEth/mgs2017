import React, { PropTypes } from 'react'
import css from '../../style'
import './ShowItem.css'

function ShowItemEl({ gallery, program, receptionDate, showDate, showName }) {
  return (
    <div className="showItem fl item relative" style={css('b1')}>
      <div className="inner" style={css('p1')}>
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
  )
}
ShowItemEl.propTypes = {
  gallery: PropTypes.string.isRequired,
  program: PropTypes.string.isRequired,
  receptionDate: PropTypes.string.isRequired,
  showDate: PropTypes.string.isRequired,
  showName: PropTypes.string.isRequired,
}
ShowItemEl.defaultProps = {
  gallery: 'Sheila & Richard Riggs Gallery',
  program: 'Teaching, MA',
  receptionDate: 'Friday, February 26, 5–7 pm',
  showDate: 'February 26–March 13, 2017',
  showName: 'Teaching',
}
export default ShowItemEl
