import React, { PropTypes } from 'react'
import Button from './Button'

function Me({ auth, isAuthenticated, user }) {
  if (!isAuthenticated) return <Button onClick={auth}>Login</Button>
  const { displayName, email, photoURL } = user
  return (
    <div className="p2">
      <h2>{displayName}</h2>
      <ul className="ls-none m0 p0">
        <li><img src={photoURL} alt={displayName} /></li>
        <li><strong>Email:</strong>{email}</li>
      </ul>
    </div>
  )
}

Me.propTypes = {
  auth: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object,
}

export default Me