import React, { PropTypes } from 'react'
import css from '../../style'
import Button from '../Button'
import Alert from '../Alert'
import Page from '../Page'
import Profile from './Profile'

function Me({ auth, authWarn, isAuthenticated, isStudent, user }) {
  if (!isAuthenticated) return <Button onClick={auth}>Login</Button>
  const { email, name, image } = user
  return (
    <Page id="profile">
      {!isStudent && <Alert type="danger">{authWarn}</Alert>}
      <div style={css('fl w50 pl2 pr1')}>
        <h2>{name}</h2>
        <ul style={css('lsNone m0 p0')}>
          <li><img src={image} alt={name} /></li>
          <li><strong>Email: </strong>{email}</li>
        </ul>
      </div>
      <div className="fl w50 pl1 pr2">
        <Profile />
      </div>
    </Page>
  )
}

Me.propTypes = {
  auth: PropTypes.func.isRequired,
  authWarn: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  isStudent: PropTypes.bool.isRequired,
  user: PropTypes.object,
}

export default Me
