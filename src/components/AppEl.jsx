import React from 'react'
import css from '../style'
import './App.css'
import Page from './Page'
import Schedule from './Schedule/Schedule'

function AppEl() {
  return (
    <Page className="App">
      <Schedule />
    </Page>
  )
}
AppEl.propTypes = {
}
export default AppEl
