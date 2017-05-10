import React, { PropTypes } from 'react'
import Info from './Info'
import Main from './Main'

function StudentDetail({ closePopup }) {
  return (
    <div id="student-overlay">
      <p>Huh</p>
      <div className="wrapper">
        <button onClick={closePopup} role="button" className="close">
          <i className="fa fa-times fa-2x" />
        </button>

        <Info />
        <Main />

      </div>
    </div>
  )
}
StudentDetail.propTypes = {
  closePopup: PropTypes.func.isRequired,
}
export default StudentDetail
