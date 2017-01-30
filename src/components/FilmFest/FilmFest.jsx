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
            <li className="sub-section">5:00pm Photo Wall & Reception with Light Food and Drink</li>
            <li className="sub-section">6:00pm–7:00pm</li>
            <li>
              <span className="filmTitle">Milo's Misfits</span> by William Bryson / 18-minutes, pilot episode, comedy
            </li>
            <li>
              <span className="filmTitle">He's Gone Now</span> by Jacob Lindsay /  14-minute, comedy
            </li>
            <li>
              <span className="filmTitle">#StrandedByVanity</span> by Janique Robillard / 23-minute Pilot Episode, 2-minute Season Teaser, dark comedy series
            </li>
            <li className="qa">Q&A with all 3 Filmmakers on Stage</li>
            <li className="sub-section">7:30pm–8:30pm</li>
            <li>
              <span className="filmTitle">Blue before Gray</span> by Phallon Beckham / 12-minutes, drama, thriller
            </li>
            <li>
              <span className="filmTitle">Welcome Home Chanel</span> by Jenahye' Johnson / 19-minutes, drama
            </li>
            <li>
              <span className="filmTitle">Mining the Museum</span> by Ralph Sporay / 25-minutes, documentary
            </li>
            <li className="qa">Q&A with all 3 Filmmakers on Stage</li>
          </ul>
        </section>
        <section>
          <h2>April 29: Saturday Night Premieres</h2>
          <ul>
            <li className="sub-section">5:00pm Photo Wall & Reception with Light Food and Drink</li>
            <li className="sub-section">6:00pm–6:45pm</li>
            <li>
              <span className="filmTitle">All to Myself</span> by Maceo Lester / 7-minutes, drama, music short
            </li>
            <li>
              <span className="filmTitle">The Painting</span> by Andrea Lagos / 15-minutes, horror, arthouse
            </li>
            <li>
              <span className="filmTitle">Telekinesis</span> by James Duffy / 15-minutes, comedy
            </li>
            <li className="qa">Q&A with all 3 Filmmakers on Stage</li>
            <li className="sub-section">7:15pm–8:00pm</li>
            <li>
              <span className="filmTitle">The Eulogy</span> by Carlos Harris / 15-minutes, drama
            </li>
            <li>
              <span className="filmTitle">easter in america</span> by Alexander Rubin / 15-minutes, dramedy
            </li>
            <li>
              <span className="filmTitle">I'm Alive & Doing Well</span> by Michael Smigiel / 15-minutes, comedy, road trip, bromancel
            </li>
            <li className="qa">Q&A with all 3 Filmmakers on Stage</li>
          </ul>
        </section>
        <section>
          <h2>April 30: Sunday Screenings</h2>
          <ul>
            <li className="sub-section">1:00–2:00pm</li>
            <li>
              <span className="filmTitle">#StrandedByVanity</span> by Janique Robillard / 23-minute Pilot Episode, 2-minute Season Teaser, dark comedy series
            </li>
            <li>
              <span className="filmTitle">Milo's Misfits</span> by William Bryson / 18-minutes, Pilot Episode, comedy
            </li>
            <li>
              <span className="filmTitle">He's Gone Now</span> by Jacob Lindsay / 14-minute, comedy
            </li>
            <li className="sub-section">INTERMISSION</li>
            <li className="sub-section">2:15–3:15pm</li>
            <li>
              <span className="filmTitle">Mining the Museum</span> by Ralph Sporay / 25-minutes, documentary
            </li>
            <li>
              <span className="filmTitle">Blue before Gray</span> by Phallon Beckham / 12-minutes, drama, thriller
            </li>
            <li>
              <span className="filmTitle">Welcome Home Chanel</span> by Jenahye' Johnson / 19-minutes, drama
            </li>
            <li className="sub-section">INTERMISSION</li>
            <li className="sub-section">3:00–3:45pm</li>
            <li>
              <span className="filmTitle">Telekinesis</span> by James Duffy / 15-minutes, comedy
            </li>
            <li>
              <span className="filmTitle">All to Myself</span> by Maceo Lester / 7-minutes, drama, music short
            </li>
            <li>
              <span className="filmTitle">The Painting</span> by Andrea Lagos /  15-minutes, horror, arthouse
            </li>
            <li className="sub-section">INTERMISSION</li>
            <li className="sub-section">4:00–5:00pm</li>
            <li>
              <span className="filmTitle">I'm Alive & Doing Well</span> by Michael Smigiel / 15-minutes, comedy, road trip, bromance
            </li>
            <li>
              <span className="filmTitle">The Eulogy</span> by Carlos Harris /  15-minutes, drama
            </li>
            <li>
              <span className="filmTitle">easter in america</span> by Alexander Rubin /  15-minutes, dramedy
            </li>
          </ul>
        </section>
      </div>
    </Page>
  )
}

export default FilmFest
