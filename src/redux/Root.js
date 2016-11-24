import { createElement, Component, PropTypes } from 'react'
// Component makes Redux store available to the connect() calls in children.
import { connect, Provider } from 'react-redux'
import Router from './Router'
import routing from './routing'

// Using a class for live/hot reload
class Root extends Component {
  render() {
    // Provider only wants a single child.
    const { store } = this.props
    return createElement(Provider, { store },
      createElement('div', null,
        createElement(connect(routing)(Router), null)
      )
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}
export default Root
