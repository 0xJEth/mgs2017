import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import css from 'cape-style'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function Page({ children, className, id, style }) {
  return (
    <page className={classnames('', className)} id={id} style={style}>
      <Header />
      <main className="bg-yellow">
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
