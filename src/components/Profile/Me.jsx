import React, { PropTypes } from 'react'
import css from '../../style'
import './Me.css'
import Button from '../Button'
import Alert from '../Alert'
import Page from '../Page'
import Profile from './Profile'

const styles = {
  login: css('ba br1 p1 block mlrauto fs2 bgTrans'),
}

function Me({ auth, authWarn, isAuthenticated, isStudent, user }) {
  if (!isAuthenticated) return <Button onClick={auth} style={styles.login}>Login</Button>
  const { email, name, image } = user
  return (
    <Page id="profile">
      {!isStudent && <Alert type="danger">{authWarn}</Alert>}
      <flex className='bg-white' style={css('pb3')}>
        <div style={css('pl2 pr2')}>
          <h2>{name}</h2>
          <ul style={css('lsNone m0 p0')}>
            <li><img src={image} alt={name} /></li>
            <li><strong>Email: </strong>{email}</li>
          </ul>
        </div>
        <div className="pl2 pr2">
          <Profile />
        </div>
      </flex>
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
