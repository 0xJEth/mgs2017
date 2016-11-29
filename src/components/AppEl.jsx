import React from 'react'
import css from '../style'
import logo from '../micaLogo.svg'
import './App.css'
import Detail from './Detail/Detail'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Schedule from './Schedule/Schedule'
import StudentList from './StudentList/StudentList'

function AppEl() {
  return (
    <div className="App text-center">
      <Header />
      <div className="App-header" style={css('pt2')}>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to MGS 2017</h2>
      </div>
      <Schedule />
      <Detail />
      <StudentList />
      <Footer />
    </div>
  )
}
AppEl.propTypes = {
}
export default AppEl
