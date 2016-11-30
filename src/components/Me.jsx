import React, { PropTypes } from 'react'
import Button from './Button'
import Profile from './Profile/Profile'

function Me({ auth, isAuthenticated, user }) {
  if (!isAuthenticated) return <Button onClick={auth}>Login</Button>
  const { email, name, image } = user
  return (
    <div id="profile" className="p2 cf">
      <div className="fl w50 pr1">
        <h2>{name}</h2>
        <ul className="ls-none m0 p0">
          <li><img src={image} alt={name} /></li>
          <li><strong>Email:</strong>{email}</li>
        </ul>
      </div>
      <div className="fl w50 pl1">
        <Profile />
      </div>
    </div>
  )
}

Me.propTypes = {
  auth: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object,
}

export default Me
