import React from 'react'
import AboutImg from '../../../assets/imgs/man-mobile.svg'


const AboutSection = () => {
  return (
    <section id="about">
      <h2>Let's get acquainted</h2>
      <div className="about-wrapper">
        <div className="about-left">
          <img src={AboutImg} alt="about" />
        </div>
        <div className="about-right">
          <h3>I am cool frontend developer</h3>
          <p>
            When real users have a slow experience on mobile, they're much less
            likely to find what they are looking for or purchase from you in the
            future. For many sites this equates to a huge missed opportunity,
            especially when more than half of visits are abandoned if a mobile
            page takes over 3 seconds to load.
          </p>
          <p>
             Last week, Google Search and Ads teams announced two new speed
            initiatives to help improve user-experience on the web.
          </p>
          <a href="#">Sign Up</a>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
