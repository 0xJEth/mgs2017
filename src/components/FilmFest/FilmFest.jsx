import React from 'react'
import css from '../../style'
import './FilmFest.css'
import Page from '../Page'

function FilmFest() {
  return (
    <Page>
      <div className="filmfest" style={css('mw6 mlrauto pb5')}>
        <section>
          <p>All film screenings are in Falvey Hall in MICA’s Brown Center.</p>
          <h2>April 28: Friday Night Premieres</h2>
          <ul>
            <li className="sub-section">4:00pm Photo Wall</li>
            <li className="sub-section">5:00pm–7:00pm</li>
            <li className="filmTitle">Mining the Museum</li>
            <li className="filmTitle">Stranded by Vanity</li>
            <li className="filmTitle">He’s Gone Now</li>
            <li className="qa">Q&A with all 3 Filmmakers on Stage</li>
            <li className="sub-section">8:00pm–10:00pm</li>
            <li className="filmTitle">Welcome Home Chanel</li>
            <li className="filmTitle">Milo’s Misfits</li>
            <li className="filmTitle">The Painting</li>
            <li className="qa">Q&A with all 3 Filmmakers on Stage</li>
          </ul>
        </section>
        <section>
          <h2>April 29: Saturday Night Premieres</h2>
          <ul>
            <li className="sub-section">4:00pm Photo Wall</li>
            <li className="sub-section">5:00pm–7:00pm</li>
            <li className="filmTitle">The Eulogy</li>
            <li className="filmTitle">PREY</li>
            <li className="filmTitle">Easter in America</li>
            <li className="qa">Q&A with all 3 Filmmakers on Stage</li>
            <li className="sub-section">8:00pm–10:00pm</li>
            <li className="filmTitle">All to Myself </li>
            <li className="filmTitle">Telekinesis </li>
            <li className="filmTitle">I’m Alive and Doing Well</li>
            <li className="qa">Q&A with all 3 Filmmakers on Stage</li>
          </ul>
        </section>
        <section>
          <h2>April 30: Sunday Screenings (No Q&A)</h2>
          <ul>
            <li className="sub-section">11:00–1:00pm</li>
            <li className="filmTitle">Easter in America</li>
            <li className="filmTitle">All to Myself </li>
            <li className="filmTitle">Telekinesis</li>
            <li className="filmTitle">I’m Alive and Doing Well</li>
            <li className="sub-section">INTERMISSION</li>
            <li className="sub-section">2:00–4:00pm</li>
            <li className="filmTitle">Milo’s Misfits</li>
            <li className="filmTitle">The Painting</li>
            <li className="filmTitle">The Eulogy</li>
            <li className="filmTitle">PREY</li>
            <li className="sub-section">INTERMISSION</li>
            <li className="sub-section">5:00–7:00pm</li>
            <li className="filmTitle">Mining the Museum</li>
            <li className="filmTitle">He’s Gone Now</li>
            <li className="filmTitle">Welcome Home Chanel</li>
            <li className="filmTitle">Stranded by Vanity</li>
          </ul>
        </section>
      </div>
    </Page>
  )
}

export default FilmFest
