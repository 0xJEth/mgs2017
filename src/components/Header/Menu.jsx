import { connect } from 'react-redux'
import Menu from 'cape-mixer/lib/Menu'
import { menuActions, menuSelector } from '../../select/menu'

export default connect(menuSelector, menuActions)(Menu)
