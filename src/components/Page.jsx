import React, { PropTypes } from 'react'
import css from '../style'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function Page({ children, className, id }) {
  return (
    <div className={className} id={id}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
}

export default Page
