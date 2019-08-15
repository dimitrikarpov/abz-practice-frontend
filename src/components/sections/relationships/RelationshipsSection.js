import React from 'react'
import JSImage from '../../../assets/imgs/javascript.svg'
import CSSImage from '../../../assets/imgs/css.svg'
import HTMLImage from '../../../assets/imgs/html.svg'

const RelationshipsSection = () => {
  return (
    <section id="relationships">
      <h2>About my relationships with  web-development</h2>
      <div className="relationships__items">
        <div className="relationships__item">
          <img src={HTMLImage} alt="html" />
          <div className="relationships__info">
            <h3>I'm in love with HTML</h3>
            <p>
              Hypertext Markup Language (HTML) is the standard markup language
              for creating web pages and web applications.
            </p>
          </div>
        </div>
        <div className="relationships__item">
          <img src={CSSImage} alt="css" />
          <div className="relationships__info">
            <h3>CSS is my best friend</h3>
            <p>
              Cascading Style Sheets (CSS)  is a style sheet language used for
              describing the presentation of a document written in a markup
              language like HTML.
            </p>
          </div>
        </div>
        <div className="relationships__item">
          <img src={JSImage} alt="js" />
          <div className="relationships__info">
            <h3>JavaScript is my passion</h3>
            <p>
              JavaScript is a high-level, interpreted programming language. It
              is a language which is also characterized as dynamic, weakly
              typed, prototype-based and multi-paradigm.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RelationshipsSection
