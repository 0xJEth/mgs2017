import React from 'react'
import PropTypes from 'prop-types'
import LinkEl from 'cape-mixer/lib/Link'

function StudentLink({ children, detailUrl }) {
  if (!detailUrl) return children
  return <LinkEl href={detailUrl}>{children}</LinkEl>
}
StudentLink.propTypes = {
  children: PropTypes.node.isRequired,
  detailUrl: PropTypes.string.isRequired,
}
export default StudentLink
