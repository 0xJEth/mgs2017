import React from 'react'
import PropTypes from 'prop-types'
// import css from 'cape-style'
import StudentInfo from './StudentInfo'
import ShowInfo from './ShowInfo'
import Main from './Main'

function StudentDetail({ closePopup }) {
  return (
    <div id="student-overlay">
      <div className="wrapper">
        <button onClick={closePopup} role="button" className="close">
          <i className="fa fa-times fa-2x" />
        </button>

        <div className="info container">
          <StudentInfo />
          <ShowInfo />
        </div>

        <Main />

      </div>
    </div>
  )
}
StudentDetail.propTypes = {
  closePopup: PropTypes.func.isRequired,
}
export default StudentDetail
