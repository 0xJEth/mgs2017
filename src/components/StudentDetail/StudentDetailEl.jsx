import React from 'react'
import PropTypes from 'prop-types'
// import css from 'cape-style'
import StudentInfo from './StudentInfo'
import ShowInfo from './ShowInfo'
import Main from './Main'

function StudentDetail({ closePopup, student }) {
  console.log(student)
  return (
    <div id="student-overlay">
      {!student && <p className="flex loading">loading...</p>}
      {student &&
        <div className="wrapper">
          <button onClick={closePopup} role="button" className="close">
            <i className="fa fa-times fa-2x" />
          </button>

          <div className="info container">
            <StudentInfo {...student} />
            <ShowInfo />
          </div>

          <Main />

        </div>
      }
    </div>
  )
}
StudentDetail.propTypes = {
  closePopup: PropTypes.func.isRequired,
  student: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
}
StudentDetail.defaultProps = {
  student: null,
}
export default StudentDetail
