import React, { PropTypes } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function Page({ children, className, id, style }) {
  return (
    <div className={className} id={id} style={style}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.func,
}

export default Page
