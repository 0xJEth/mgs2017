import React from 'react'
import css from '../../style'
import './Schedule.css'
import Search from '../Search/Search'
import ShowItem from './ShowItem'

function ScheduleEl() {
  return (
    <article id="schedule" style={css('pl1 pr1 pb2')}>
      <header>
        <h1 style={css('m0 p0')}>Schedule</h1>
        <Search />
      </header>

      <section>
        <h2 className="bb4 mt3 mb0p5">Exhibitions?</h2>
        <div className="shows item-grid">
          <ShowItem />
          <ShowItem />
          <ShowItem />
          <ShowItem />
          <ShowItem />
        </div>
      </section>

      <section>
        <h2 className="bb4 mt3 mb0p5">OneDays</h2>
        <div className="shows item-grid">
          <ShowItem />
          <ShowItem />
        </div>
      </section>

      <section>
        <h2 className="bb4 mt3 mb0p5">Curatorial...</h2>
        <div className="shows item-grid">
          <ShowItem />
          <ShowItem />
          <ShowItem />
          <ShowItem />
          <ShowItem />
          <ShowItem />
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
