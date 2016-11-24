import React from 'react'
import micaLogo from '../micaLogo.svg'
import './Footer.css'

function FooterEl() {
  return (
    <footer className="bg-yellow p1 pt6 pb6">
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
        <section className="tenth column archive">
          <h3 className="fs1 m0">Archive</h3>
          <ul className="ls-none m0 p0">
            <li><a href="https://2016.micagradshow.com/?utm_source=mica%20grad%20show2017">2016</a></li>
            <li><a href="http://2015.micagradshow.com/?utm_source=mica%20grad%20show2017">2015</a></li>
            <li><a href="http://graduate.mica.edu/gradshow/2014/?utm_source=mica%20grad%20show2017">2014</a></li>
            <li><a href="http://graduate.mica.edu/thesis/?utm_source=mica%20grad%20show2017">2013</a></li>
          </ul>
        </section>
        <section className="tenth column social">
          <ul className="ls-none m0 p0">
            <li>
              <a href="https://www.instagram.com/micagrad/">
                <i className="fa fa-instagram fa-2x" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/MICAGradAdmission/">
                <i className="fa fa-facebook-square fa-2x" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/MICAgrad">
                <i className="fa fa-twitter fa-2x" />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  )
}
FooterEl.propTypes = {
}
export default FooterEl
