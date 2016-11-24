import { connect } from 'react-redux'

import { auth } from '../fire/actions'
import Component from './AppEl'

const mapDispatchToProps = { auth }
export default connect(null, mapDispatchToProps)(Component)
