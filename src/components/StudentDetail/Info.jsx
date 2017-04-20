import React, { PropTypes } from 'react'
import StudentInfo from './StudentInfo'
import ShowInfo from './ShowInfo'

function Info({ user }) {
  return (
    <div className="info container">
      <StudentInfo />
      <ShowInfo />
    </div>
  )
}

Info.PropTypes = {
  user: PropTypes.object.isRequired,
}

export default Info
