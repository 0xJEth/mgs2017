import React from 'react'
import css from '../../style'
import './StudentList.css'
import Page from '../Page'
import Search from '../Search/Search'
import Student from './Student'

function StudentListEl() {
  return (
    <Page>
      <article id="studentList" className="text-left" style={css('pl1 pr1 pb2')}>
        <header>
          <h1 style={css('m0 p0')}>Students</h1>
          <Search />
        </header>
        <section>
          <ul className="student-list" style={css('lsNone m0 p0 mt1')}>
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
          </ul>
        </section>
      </article>
    </Page>
  )
}

StudentListEl.propTypes = {
}
StudentListEl.defaultProps = {
}
export default StudentListEl
