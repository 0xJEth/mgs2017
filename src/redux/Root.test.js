import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import configureStore from './configureStore'

/* global window it expect */

const store = configureStore({})

it('renders without crashing', () => {
  const div = window.document.createElement('div')
  ReactDOM.render(<Root store={store} />, div)
})
