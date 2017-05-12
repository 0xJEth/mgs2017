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
import ArtEdit from './ArtEdit'

const styles = {
  login: css('ba br1 p1 block mlrauto fs2 bgTrans'),
}

function Me(props) {
  const {
    artwork, auth, authStudentMissing, authWarn,
    hasMicaEmail, isAuthenticated, isStudent, params, user,
  } = props
  if (!isAuthenticated) return <Button onClick={auth} style={styles.login}>Login</Button>
  if (!user.email) return <p className="flex loading">Loading...</p>
  const { email, name, id } = user
  const micaNoInfo = hasMicaEmail && !isStudent

  return (
    <Page id="profile">
      {micaNoInfo && <Alert type="danger">{authStudentMissing}</Alert>}
      {!hasMicaEmail && <Alert type="danger">{template(authWarn)(user)}</Alert>}
      <flex className="bg-white" style={css('pb3 pl1 pr1')}>
        <h2 style={css('pl1 pr1 w100')}>{name}</h2>
        <flex style={css('w100')}>
          <p style={css('pl1 pr1 m0')}><strong>Email: </strong>{email}</p>
          <p style={css('pl1 pr1 m0')}>{id}</p>
        </flex>
        {/* <div style={css('pl1 pr1')}>
          <h2>{name}</h2>
          <ul style={css('lsNone m0 p0')}>
            <li><img src={image} alt={name} /></li>
            <li><strong>Email: </strong>{email}</li>
            <li>{id}</li>
          </ul>
        </div> */}
        <div className="third personal" style={css('pl1 pr1')}>
          <Profile />
        </div>
        <div className="third artGrid" style={css('pl1 pr1')}>
          <ArtGrid activeId={params.artId} items={artwork} />
        </div>
        <div className="third artEdit" style={css('pl1 pr1')}>
          {params.artId && <ArtEdit prefix={['CreativeWork', params.artId]} />}
        </div>
      </flex>
    </Page>
  )
}
Me.defaultProps = {
  artwork: null,
  authStudentMissing: null,
  authWarn: null,
  params: {},
  user: {},
}
Me.propTypes = {
  artwork: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, type: PropTypes.string })),
  auth: PropTypes.func.isRequired,
  authStudentMissing: PropTypes.string,
  authWarn: PropTypes.string,
  hasMicaEmail: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isStudent: PropTypes.bool.isRequired,
  params: PropTypes.objectOf(PropTypes.string),
  user: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
  }),
}

export default Me
