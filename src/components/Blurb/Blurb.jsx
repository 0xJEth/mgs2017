import React from 'react'
import PropTypes from 'prop-types'
import css from 'cape-style'
// import './Blurb.css'

function Blurb({ description, tagline, siteName, mgsBlock }) {
  return (
    <section id="blurb" className="bg-white" style={css('pt2 pb2')}>
      <div className="wrapper" style={css('mlrauto flex')}>
        <div className="flexItem" style={css('p1')}>
          <img src={mgsBlock} alt={siteName} title={siteName} className="mgsLogo" />
        </div>
        <div className="flexItem" style={css('p1')}>
          <h1 style={css('m0 mb1 fs2')}>{tagline}</h1>
          {description.map((pText, index) => <p key={index}>{pText}</p>)}
        </div>
      </div>
    </section>
  )
}
Blurb.propTypes = {
  description: PropTypes.array.isRequired,
  tagline: PropTypes.string.isRequired,
  mgsBlock: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired,
}
Blurb.defaultProps = {
  description: [
    `We invite you to join the next generation of creative thinkers—artists, designers, filmmakers, educators, curators and critics—as they demonstrate the power and possibilities of contemporary art and design.`,
    `MICA Grad Show 2017 includes exhibitions and critiques, gallery talks and presentations, public programs, a symposium, and student-curated installations throughout Baltimore City.`,
    `Join us for a season of innovative and inspiring events and exhibitions featuring the culminating work of more than 150 of MICA's graduate students from the College's internationally renowned programs.`,
  ],
  tagline: 'Meet the next generation of creative thinkers.',
}
export default Blurb
