import React, { PropTypes } from 'react'
import micaLogo from '../../micaLogo.svg'
import css from '../../style'
import './Footer.css'
import Links from './Links'

function FooterEl({ archive, siteId, social }) {
  return (
    <footer className="bg-yellow" style={css('pt4 pr1 pb6 pl1 mt2')}>
      <flex style={css('flex')} >
        <section className="mica logo">
          <a href="http://www.mica.edu/?utm_source=mica%20grad%20show2017">
            <img src={micaLogo} alt="MICA logo" />
          </a>
        </section>
        <section>
          <ul className="ls-none m0 p0">
            <li><a href="">Office of Graduate Studies</a></li>
            <li>131 West North Avenue</li>
            <li>Baltimore, MD 21201</li>
            <li>(410) 225-5274</li>
          </ul>
        </section>
        <section>
          <ul className="ls-none m0 p0">
            <li><a href="https://www.mica.edu/Admission_and_Financial_Aid/Graduate_Admission_and_Financial_Aid.html?utm_source=mica%20grad%20show2017">MICA Graduate Admissions</a></li>
            <li><a href="http://micagradstudies.tumblr.com/?utm_source=mica%20grad%20show2017">MICA Grad Show Blog</a></li>
            <li><a href="http://eepurl.com/bciqMT">Sign up for the MICA Grad Show mailing list</a></li>
          </ul>
        </section>
        {archive && <Links className="archive" links={archive} siteId={siteId} />}
        {social && <Links className="social" links={social} />}
      </flex>
    </footer>
  )
}
FooterEl.defaultProps = {
}
FooterEl.propTypes = {
  archive: PropTypes.array,
  siteId: PropTypes.string,
  social: PropTypes.array,
}
export default FooterEl
