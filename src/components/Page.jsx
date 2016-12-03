import React, { PropTypes } from 'react'
import classnames from 'classnames'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function Page({ children, className, id, style }) {
  return (
    <page className={classnames('', className)} id={id} style={style}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </page>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.func,
}

export default Page
