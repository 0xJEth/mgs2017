import React, { PropTypes } from 'react'
import css from '../../style'
import './Schedule.css'
import ShowItem from './ShowItem'

function ScheduleEl() {
  return (
    <article id="schedule" style={css('pl1 pr1 pb2')}>
      <header>
        <h1 style={css('m0 p0')}>Schedule</h1>
        <label className="search-wrapper" htmlFor="search">
          <i className="fa fa-search" aria-hidden="true" />
          <input className="search" />
        </label>
      </header>

      <section>
        <h2 className="bb4 mt3 mb2">Exhibitions?</h2>
        <div className="shows item-grid">
          <ShowItem />
        </div>
      </section>

    </article>
  )
}
ScheduleEl.defaultProps = {
}
ScheduleEl.propTypes = {
}
export default ScheduleEl
