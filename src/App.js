import React from 'react'
import HeaderLogo from './assets/logo/logo.svg'
import SuperstarAvatar from './assets/imgs/user-superstar-2x.jpg'
import SignOutIcon from './assets/icons/sign-out.svg'
import AboutImg from './assets/imgs/man-mobile.svg'

function App() {
  return (
    <div className="App">
      <section id="header">
        <img className="header__logo" src={HeaderLogo} alt="logo" />
        <nav className="header__nav">
          <ul>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Relationships</a>
            </li>
            <li>
              <a href="#">Requirements</a>
            </li>
            <li>
              <a href="#">Users</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </nav>
        <div className="header__user">
          <div className="header__user-info">
            <p className="header__user-name">Superstar</p>
            <p className="header__user-email">Superstar@gmail.com</p>
          </div>
          <img
            src={SuperstarAvatar}
            alt="avatar"
            className="header__user-avatar"
          />
          <img src={SignOutIcon} alt="sign out" className="header__sign-out" />
        </div>
      </section>

      <section id="banner">
        <div className="banner-left">
          <h1 className="banner__title">
            Test assignment for Frontend Developer position
          </h1>
          <p className="banner__text">
            We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository. Please be patient, we
            consider and respond to every application that meets minimum
            requirements. We look forward to your submission. Good luck!
          </p>
          <div className="banner__button">
            <a href="#" className="btn btn-primary">
              Sign Up
            </a>
          </div>
        </div>
        <div className="banner-right" />
      </section>

      <section id="about">
        <h2>Let's get acquainted</h2>
        <div className="about-wrapper">
          <div className="about-left">
            <img src={AboutImg} alt="about" />
          </div>
          <div className="about-right">
            <h3>I am cool frontend developer</h3>
            <p>
              When real users have a slow experience on mobile, they're much
              less likely to find what they are looking for or purchase from you
              in the future. For many sites this equates to a huge missed
              opportunity, especially when more than half of visits are
              abandoned if a mobile page takes over 3 seconds to load.
            </p>
            <p>
               Last week, Google Search and Ads teams announced two new speed
              initiatives to help improve user-experience on the web.
            </p>
            <a href="#">Sign Up</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
