import React from 'react'
import PropTypes from 'prop-types'
import marked from 'marked'
// import css from 'cape-style'
import mgsBlock from '../../mgs2017LogoBlock.svg'

import Slideshow from './Slideshow'
import NoImages from './NoImages'
import ProgramList from './ProgramList'

function Main({ art, program, statement }) {
  return (
    <div className="student-main">
      { art && <Slideshow collection={art} /> }
      {!art && <NoImages /> }
      <div className="container flex">
        <ProgramList {...program} />
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
  statement: PropTypes.string.isRequired,
  program: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
}
Main.defaultProps = {
}

export default Main
