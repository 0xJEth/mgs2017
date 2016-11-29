import React from 'react'
import css from '../style'
import './App.css'
import Detail from './Detail/Detail'
import Page from './Page'
import Schedule from './Schedule/Schedule'

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
