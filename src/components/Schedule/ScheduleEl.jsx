import React, { PropTypes } from 'react'
import css from '../../style'
import './Schedule.css'
import ShowItem from './ShowItem'

function ScheduleEl() {
  return (
    <article id="schedule" className="text-left" style={css('pl1 pr1 pb2')}>
      <header>
        <h1 style={css('m0 p0')}>Schedule</h1>
        <label className="search-wrapper relative" htmlFor="search" style={css('fs1p5 lh3')}>
          <i className="fa fa-search absolute" aria-hidden="true" style={css('lh3 left1p5')} />
          <input className="search" style={css('lh3')} />
        </label>
      </header>

      <section>
        <h2 className="bb4 mt3 mb2">Exhibitions?</h2>
        <div className="shows item-grid">
          <ShowItem />
          <ShowItem />
          <ShowItem />
          <ShowItem />
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
