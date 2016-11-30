import { createElement, PropTypes } from 'react'
import { connect } from 'react-redux'
import { get, isFunction } from 'lodash'

// Top level "router". Heh.
import * as RouteIndex from '../components/RouteIndex'

// It just uses a specific component given a prop value.
// Less declaritive perhaps but really easy to reason about.
// You can use this concept anywhere!

function Router(props) {
  // Define the prop that defines what component to render.
  const { loading, route: { id } } = props
  if (loading) {
    return createElement(RouteIndex.loading, null)
  }
  // Select your component from the routeIndex defined above.
  // console.log('routeId', id)
  // Provide default Component if there is no match.
  const MainElement = get(RouteIndex, id, RouteIndex.home)
  // Render that component. Send along any props this component got.
  return createElement(MainElement, props)
}

Router.propTypes = {
  loading: PropTypes.bool.isRequired,
  route: PropTypes.object.isRequired,
}

export function selectSessionId(state) {
  return state.socket.sessionId
}
export function socketLoading() {
  return false
  // return !isString(selectSessionId(state))
}
function mapStateToProps(state, ownProps) {
  const { route: { isLoading } } = ownProps
  const checkLoading = isLoading || socketLoading
  const loading = isFunction(checkLoading) && !!checkLoading(state)
  return {
    loading,
  }
}
export default connect(mapStateToProps)(Router)
