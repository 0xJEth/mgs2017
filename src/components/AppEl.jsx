import React, { PropTypes } from 'react'
import logo from '../logo.svg'
import './App.css'
import Button from './Button'

function AppEl({ auth }) {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to MGS 2017</h2>
        <Button onClick={auth}>Login</Button>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  )
}
AppEl.propTypes = {
  auth: PropTypes.func.isRequired,
}
export default AppEl
