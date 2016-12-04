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
          <Search collectionId={collectionId} />
          {programOptions &&
            <FilterSelect collectionId={collectionId} fieldId="program" options={programOptions} />
          }
        </header>
        <section>
          <ul className="student-list" style={css('mt2 bt')}>
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
