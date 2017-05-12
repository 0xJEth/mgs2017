import React from 'react'
import PropTypes from 'prop-types'
import css from 'cape-style'
import Close from 'cape-mixer/lib/CloseButton'
import StudentInfo from './StudentInfo'
import ShowInfo from './ShowInfo'
import Main from './Main'

function StudentDetail({ closePopup, student }) {
  const close = <Close icon="times-btl" onClick={closePopup} style={css('absolute')} />
  return (
    <div id="student-overlay">
      {!student && <p className="flex loading">loading...</p>}
      {student &&
        <div className="wrapper flex">
          {close}

          <div className="info container flex">
            <StudentInfo {...student} />
            <ShowInfo {...student.show} />
          </div>

          <Main {...student} />

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
