import React, { PropTypes } from 'react'
import { map } from 'lodash'
import css from '../../style'
import './StudentList.css'
import Page from '../Page'
import Search from '../Search/Search'
import FilterSelect from '../FilterSelect'
import Student from './Student'

function StudentListEl({ programOptions, students }) {
  const collectionId = 'Student'
  return (
    <Page>
      <article id="studentList" className="text-left" style={css('p0 pl1 pr1')}>
        <header>
          <h1 style={css('m0 p0')}>Students</h1>
          <div className="group" style={css('flex')}>
            <Search collectionId={collectionId} style={css('flexAuto')} />
            {programOptions &&
              <div className="customSelect" style={css('flexAuto')}>
                <FilterSelect
                  collectionId={collectionId}
                  fieldId="program"
                  options={programOptions}
                />
              </div>
            }
          </div>
        </header>
        <section>
          <ul className="student-list" style={css('mt2 bt')}>
            <li className="student header" style={css('p0p5 pl2 pr2 bb')}>
              <span className="name"><strong>Name</strong></span>
              <span className="program"><strong>Program</strong></span>
              <span className="website" />
              <span className="show"><strong>Show</strong></span>
              <span className="social" />
            </li>
            {map(students, item => <Student key={item.id} {...item} />)}
          </ul>
        </section>
      </article>
    </Page>
  )
}

StudentListEl.propTypes = {
  students: PropTypes.objectOf(PropTypes.object),
  programOptions: PropTypes.arrayOf(PropTypes.object),
}
StudentListEl.defaultProps = {
}
export default StudentListEl
