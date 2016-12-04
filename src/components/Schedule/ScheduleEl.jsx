import React, { PropTypes } from 'react'
import { map } from 'lodash'
import css from '../../style'
import './Schedule.css'
import Search from '../Search/Search'
import ShowItem from './ShowGroup'

function ScheduleEl({ showGroups }) {
  const { onCampusExhibition, singleDay } = showGroups
  return (
    <article id="schedule" style={css('pl1 pr1 pb2')}>
      <header>
        <h1 style={css('m0 p0')}>Schedule</h1>
        <Search />
      </header>

      <section>
        <h2 className="bb4 mt3 mb0p5">Exhibitions</h2>
        <flex className="shows item-grid">
          {onCampusExhibition &&
            map(onCampusExhibition, item => <ShowItem key={item.id} {...item} />)
          }
        </flex>
      </section>

      <section>
        <h2 className="bb4 mt3 mb0p5">OneDays</h2>
        <div className="shows item-grid">
          {singleDay &&
            map(singleDay, item => <ShowItem key={item.id} {...item} />)
          }
        </div>
      </section>

      <section>
        <h2 className="bb4 mt3 mb0p5">FilmFest</h2>
        <div className="shows item-grid">
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
  showGroups: PropTypes.shape({
    onCampusExhibition: PropTypes.arrayOf(PropTypes.object),
    singleDay: PropTypes.arrayOf(PropTypes.object),
  }),
}
export default ScheduleEl
