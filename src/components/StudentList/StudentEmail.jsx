import React, { PropTypes } from 'react'

function StudentEmail({ email }) {
  return (
    <li>
      {email}
    </li>
  )
}

StudentEmail.propTypes = {
  email: PropTypes.string,
}
StudentEmail.defaultProps = {
}
export default StudentEmail
