import React, { PropTypes } from 'react'
import { map } from 'lodash'
import Link from 'redux-history-component'
import css from '../../style'
import './ShowItem.css'

function getLink({ id, key }) {
  return `/details/${key || id}`
}
function ShowGroup({ name, program, reception, showDate, ...props }) {
  const link = getLink(props)
  return (
    <div className="showItem item">
      <Link href={link} className="block black" style={css('textReset')}>
        <h1 style={css('m0 mb1')}>{ name }</h1>
        {showDate && <h2 style={css('m0 mb1')} className="dateRange">{showDate}</h2>}
        {reception && <h2 style={css('m0 mt1 mb1')}>Reception: <br />{reception}</h2>}
        <ul style={css('lsNone m0 p0')}>
          {program && map(program, (item, key) => <li key={key}>{item.name}</li>)}
        </ul>
      </Link>
    </div>
  )
}

ShowGroup.propTypes = {
  // gallery: PropTypes.string.isRequired,
  program: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  reception: PropTypes.string,
  showDate: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
ShowGroup.defaultProps = {
  endDate: '',
  name: '[name here...]',
  program: { name: 'Teaching, MA' },
  showDate: 'February 26–March 13, 2017',
  showName: 'Teaching',
  startDate: '',
}
export default ShowGroup
