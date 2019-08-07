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
    </div>
  )
}

export default App
