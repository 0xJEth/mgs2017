import React, { Component, PropTypes } from 'react'
// Component makes Redux store available to the connect() calls in children.
import { Provider } from 'react-redux'
import App from './App'

// Using a class for live/hot reload
class Root extends Component {
  render() {
    // Provider only wants a single child.
    const { store } = this.props
    return React.createElement(Provider, { store },
      React.createElement('div', null,
        React.createElement(App, null)
      )
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}
export default Root
