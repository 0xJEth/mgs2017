import React from 'react'
import PropTypes from 'prop-types'
import { template } from 'lodash'
import css from 'cape-style'
import Button from 'cape-mixer/lib/Button'
// import './Me.css'
import Alert from '../Alert'
import Page from '../Page'
import Profile from './Profile'
import ArtGrid from './Art'

const styles = {
  login: css('ba br1 p1 block mlrauto fs2 bgTrans'),
}

function Me(props) {
  const {
    artwork, auth, authStudentMissing, authWarn,
    hasMicaEmail, isAuthenticated, isStudent, params, user,
  } = props
  if (!isAuthenticated) return <Button onClick={auth} style={styles.login}>Login</Button>
  if (!user.email) return <p>Loading...</p>

  const { email, name, id, image } = user
  const micaNoInfo = hasMicaEmail && !isStudent
  return (
    <Page id="profile">
      {micaNoInfo && <Alert type="danger">{authStudentMissing}</Alert>}
      {!hasMicaEmail && <Alert type="danger">{template(authWarn)(user)}</Alert>}
      <flex className="bg-white" style={css('pb3')}>
        <div style={css('pl2 pr2')}>
          <h2>{name}</h2>
          <ul style={css('lsNone m0 p0')}>
            <li><img src={image} alt={name} /></li>
            <li><strong>Email: </strong>{email}</li>
            <li>{id}</li>
          </ul>
        </div>
        <div className="pl2 pr2">
          <Profile />
          <ArtGrid activeId={params.artId} items={artwork} />
        </div>
      </flex>
    </Page>
  )
}
Me.defaultProps = {
  artwork: null,
}
Me.propTypes = {
  artwork: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, type: PropTypes.string })),
  auth: PropTypes.func.isRequired,
  authStudentMissing: PropTypes.string,
  authWarn: PropTypes.string,
  hasMicaEmail: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isStudent: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
  }),
}

export default Me
