import React from 'react'
import HeaderLogo from './assets/logo/logo.svg'
import SuperstarAvatar from './assets/imgs/user-superstar-2x.jpg'
import SignOutIcon from './assets/icons/sign-out.svg'

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
          <h1 className="banner__title">Test assignment for Frontend Developer position</h1>
          <p className="banner__text">
            We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository. Please be patient, we
            consider and respond to every application that meets minimum
            requirements. We look forward to your submission. Good luck!
          </p>
          <div className="banner__button">
            <a href="#" className="btn btn-primary">Sign Up</a>
          </div>

        </div>
        <div className="banner-right" />
      </section>
    </div>
  )
}

export default App
