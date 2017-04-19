import { createElement } from 'react'
import { render } from 'react-dom'
// Redux code to build store.
import configureStore from './redux/configureStore'
// Root React component.
import Root from './redux/Root'
import './index.css'
import './components/Editable/Editable.css'
import { locInfo } from './routes'

/* global window */

// Define our inital state object. This could be a fetch() to an API endpoint.
const initialState = {
  locInfo,
}
// Configure and create our Redux store.
const store = configureStore(initialState)

// Define our destination where we insert our root react component.
const destEl = window.document.getElementById('root')

render(createElement(Root, { store }), destEl)
