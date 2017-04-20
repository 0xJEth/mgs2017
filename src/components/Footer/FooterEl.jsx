import React from 'react'
import PropTypes from 'prop-types'
import css from 'cape-style'
import micaLogo from '../../micaLogo.svg'
// import './Footer.css'
import Links from './Links'

function FooterEl({ archive, siteId, social }) {
  return (
    <footer className="bg-white" style={css('pt4 pr1 pb6 pl1')}>
      <flex style={css('flex')} >
        <section className="mica logo">
          <a href="http://www.mica.edu/?utm_source=mica%20grad%20show2017">
            <img src={micaLogo} alt="MICA logo" />
          </a>
        </section>
        <section>
          <ul style={css('lsNone m0 p0')}>
            <li><a href="http://www.micagradcommunity.org/?utm_source=mica%20grad%20show2017">Office of Graduate Studies</a></li>
            <li>131 West North Avenue</li>
            <li>Baltimore, MD 21201</li>
            <li>(410) 225-5274</li>
          </ul>
        </section>
        <section>
          <ul style={css('lsNone m0 p0')}>
            <li><a href="https://www.mica.edu/Admission_and_Financial_Aid/Graduate_Admission_and_Financial_Aid.html?utm_source=mica%20grad%20show2017">MICA Graduate Admissions</a></li>
            <li><a href="http://micagradstudies.tumblr.com/?utm_source=mica%20grad%20show2017">MICA Grad Show Blog</a></li>
            <li><a href="http://eepurl.com/bciqMT">Sign up for the MICA Grad Show mailing list</a></li>
            <li><a href="http://www.micagradcommunity.org/?utm_source=mica%20grad%20show2017">MICA Grad Community</a></li>
          </ul>
        </section>
        {archive && <Links className="archive" title="Archive" links={archive} siteId={siteId} />}
        {social && <Links className="social" links={social} />}
      </flex>
    </footer>
  )
}
FooterEl.propTypes = {
  archive: PropTypes.array,
  siteId: PropTypes.string,
  social: PropTypes.array,
}
FooterEl.defaultProps = {
}
export default FooterEl
