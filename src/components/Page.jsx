import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function Page({ children, ...props }) {
  return (
    <page {...props}>
      <Header />
      <main className="bg-yellow">
        {children}
      </main>
      <Footer />
    </page>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}
Page.defaultProps = {
  id: 'page',
}
export default Page
