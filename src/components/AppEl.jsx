import React from 'react'
import logo from '../logo.svg'
import './App.css'
import Me from './Me'

function AppEl() {
  return (
    <div className="App text-center">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to MGS 2017</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Me />
    </div>
  )
}
AppEl.propTypes = {
}
export default AppEl
