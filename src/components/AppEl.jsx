import React from 'react'
import css from '../style'
import logo from '../micaLogo.svg'
import './App.css'
import Me from './Me'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Schedule from './Schedule/Schedule'

function AppEl() {
  return (
    <div className="App text-center">
      <Header />
      <div className="App-header" style={css('pt2')}>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to MGS 2017</h2>
      </div>
      <p className="App-intro" style={css('pt4')}>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Me />
      <Schedule />
      <Footer />
    </div>
  )
}
AppEl.propTypes = {
}
export default AppEl
