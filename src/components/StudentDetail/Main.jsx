import React from 'react'
import PropTypes from 'prop-types'
import marked from 'marked'
// import css from 'cape-style'
import mgsBlock from '../../mgs2017LogoBlock.svg'

import Slideshow from './Slideshow'
import NoImages from './NoImages'
import ProgramList from './ProgramList'

function Main({ art, statement }) {
  return (
    <div className="student-main">
      { art && <Slideshow collection={art} /> }
      {!art && <NoImages /> }
      <div className="container flex">
        <ProgramList />
        { statement &&
          <div
            className="statement w50"
            dangerouslySetInnerHTML={{ __html: marked(statement) }}
          />
        }
        <div className="logo w20">
          <img src={mgsBlock} alt="MICA Grad Show 2017" className="mgsLogo" />
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {
  art: PropTypes.arrayOf(PropTypes.object).isRequired,
  statement: PropTypes.string,
}
Main.defaultProps = {
  statement: 'Beans coffee, cortado body arabica barista americano...',
}

export default Main
