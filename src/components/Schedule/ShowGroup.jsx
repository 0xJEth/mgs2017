import React from 'react'
import PropTypes from 'prop-types'
import { map, propertyOf } from 'lodash'
import Link from 'redux-history-component'
import css from 'cape-style'
// import './ShowItem.css'

export const linkMap = propertyOf({
  recL5bU5855qMhQT4: 'recy5OLOvJNnpWuAD',
  reclZwOjZuXJVbRg1: 'recPkxpU5hm2lfIWC',
  recnt8Oz3oN0HBKSH: 'recdoBpSFrFhf1WwX',
})

export function getLink({ id, key }) {
  return `/details/${key || linkMap(id) || id}`
}

function Reception({ date, extra }) {
  return (
    <h2 style={css('m0 mt1 mb1')}>
      Reception: <br />
      {date}
      {extra && <span><br />{extra}</span>}
    </h2>
  )
}
Reception.propTypes = {
  date: PropTypes.string.isRequired,
  extra: PropTypes.string,
}

function ShowGroup({ extraChild, name, program, reception, showDate, ...props }) {
  const link = getLink(props)
  return (
    <div className="showItem item">
      <Link href={link} className="block black" style={css('textReset')}>
        <h1 style={css('m0 mb1')}>{ name }</h1>
        {showDate && <h2 style={css('m0 mb1')} className="dateRange">{showDate}</h2>}
        {reception && <Reception date={reception} extra={extraChild && extraChild.reception} />}
        <ul style={css('lsNone m0 p0')}>
          {program && map(program, (item, key) => <li key={key}>{item.name}</li>)}
        </ul>
      </Link>
    </div>
  )
}

ShowGroup.propTypes = {
  extraChild: PropTypes.shape({
    reception: PropTypes.string,
  }),
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
