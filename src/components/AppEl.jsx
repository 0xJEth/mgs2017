import React from 'react'
import css from '../style'
import logo from '../micaLogo.svg'
import './App.css'
import Detail from './Detail/Detail'
import Page from './Page'
import Schedule from './Schedule/Schedule'
import StudentList from './StudentList/StudentList'

function AppEl() {
  return (
    <Page className="App text-center">
      <Schedule />
      <Detail />
    </Page>
  )
}
AppEl.propTypes = {
}
export default AppEl
