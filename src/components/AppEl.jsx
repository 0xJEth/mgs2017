import React from 'react'
import logo from '../logo.svg'
import './App.css'
import Me from './Me'
import Footer from './Footer'

function AppEl() {
  return (
    <div className="App text-center">
      <div className="App-header pt2">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to MGS 2017</h2>
      </div>
      <p className="App-intro pt4">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Me />
      <Footer />
    </div>
  )
}
AppEl.propTypes = {
}
export default AppEl
