import React, { PropTypes } from 'react'
import micaLogo from '../../micaLogo.svg'
import './Footer.css'
import Links from './Links'

function FooterEl({ archive, siteId, social }) {
  return (
    <footer className="bg-yellow p1 pt6 pb6 mt4">
      <div className="group">
        <section className="fifth column">
          <div className="mica logo mr1">
            <a href="http://www.mica.edu/?utm_source=mica%20grad%20show2017">
              <img src={micaLogo} alt="MICA logo" />
            </a>
          </div>
        </section>
        <section className="fifth column">
          <ul className="ls-none m0 p0">
            <li><a href="">Office of Graduate Studies</a></li>
            <li>131 West North Avenue</li>
            <li>Baltimore, MD 21201</li>
            <li>(410) 225-5274</li>
          </ul>
        </section>
        <section className="fifth column">
          <ul className="ls-none m0 p0">
            <li><a href="https://www.mica.edu/Admission_and_Financial_Aid/Graduate_Admission_and_Financial_Aid.html?utm_source=mica%20grad%20show2017">MICA Graduate Admissions</a></li>
            <li><a href="http://micagradstudies.tumblr.com/?utm_source=mica%20grad%20show2017">MICA Grad Show Blog</a></li>
            <li><a href="http://eepurl.com/bciqMT">Sign up for the MICA Grad Show mailing list</a></li>
          </ul>
        </section>
        <Links className="tenth archive" links={archive} siteId={siteId} />
        <Links className="tenth social" links={social} />
      </div>
    </footer>
  )
}
FooterEl.defaultProps = {
  archive: [
    { title: '2016', src: 'https://2016.micagradshow.com/?utm_source=mgs2017' },
    { title: '2015', src: 'http://2015.micagradshow.com?utm_source=mgs2017' },
    { title: '2014', src: 'http://graduate.mica.edu/gradshow/2014/?utm_source=mgs2017' },
    { title: '2013', src: 'http://graduate.mica.edu/thesis/?utm_source=mgs2017' },
  ],
  social: [
    {
      title: 'Instagram',
      src: 'https://2016.micagradshow.com/?utm_source=mgs2017',
      symbol: 'instagram',
    },
    {
      title: 'Facebook',
      src: 'http://2015.micagradshow.com?utm_source=mgs2017',
      symbol: 'facebook-square',
    },
    {
      title: 'Twitter',
      src: 'http://graduate.mica.edu/gradshow/2014/?utm_source=mgs2017',
      symbol: 'twitter',
    },
  ],
}
FooterEl.propTypes = {
  archive: PropTypes.array.isRequired,
  siteId: PropTypes.string,
  social: PropTypes.array.isRequired,
}
export default FooterEl
