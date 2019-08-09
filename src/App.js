import React from 'react'
import HeaderLogo from './assets/logo/logo.svg'
import SuperstarAvatar from './assets/imgs/user-superstar-2x.jpg'
import SignOutIcon from './assets/icons/sign-out.svg'
import AboutImg from './assets/imgs/man-mobile.svg'
import JSImage from './assets/imgs/javascript.svg'
import CSSImage from './assets/imgs/css.svg'
import HTMLImage from './assets/imgs/html.svg'
import RequirementsImage from './assets/imgs/man-laptop-v1.svg'
import UserElizImage from './assets/imgs/user-elizabeth-2x.jpg'

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
        <div className="banner-right">{''}</div>
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

      <section id="relationships">
        <h2>About my relationships with  web-development</h2>
        <div className="relationships__items">
          <div className="relationships__item">
            <img src={HTMLImage} alt="html" />
            <h3>I'm in love with HTML</h3>
            <p>
              Hypertext Markup Language (HTML) is the standard markup language
              for creating web pages and web applications.
            </p>
          </div>
          <div className="relationships__item">
            <img src={CSSImage} alt="css" />
            <h3>CSS is my best friend</h3>
            <p>
              Cascading Style Sheets (CSS)  is a style sheet language used for
              describing the presentation of a document written in a markup
              language like HTML.
            </p>
          </div>
          <div className="relationships__item">
            <img src={JSImage} alt="js" />
            <h3>JavaScript is my passion</h3>
            <p>
              JavaScript is a high-level, interpreted programming language. It
              is a language which is also characterized as dynamic, weakly
              typed, prototype-based and multi-paradigm.
            </p>
          </div>
        </div>
      </section>

      <section id="requirements">
        <h2 className="requirements__title">General requirements for the test task</h2>
        <div className="requirements__wrapper">
          <div className="requirements__text">
            <p>
              Users want to find answers to their questions quickly and data
              shows that people really care about how quickly their pages load.
              The Search team announced speed would be a ranking signal for
              desktop searches in 2010 and as of this month (July 2018), page
              speed will be a ranking factor for mobile searches too.  
            </p>
            <p>
               If you're a developer working on a site, now is a good time to
              evaluate your performance using our speed tools. Think about how
              performance affects the user experience of your pages and consider
              measuring a variety of real-world user-centric performance
              metrics.
            </p>
            <p>
              Are you shipping too much JavaScript? Too many images? Images and
              JavaScript are the most significant contributors to the page
              weight that affect page load time based on data from HTTP Archive
              and the Chrome User Experience Report - our public dataset for key
              UX metrics as experienced by Chrome users under real-world
              conditions.
            </p>
          </div>
          <img src={RequirementsImage} alt="requirements image"/>
        </div>
      </section>

      <section id="users">
        <h2>Our cheerful users</h2>
        <h5>Attention! Sorting users by registration date</h5>
        <div className="users-grid">
          <div className="users__card">
            <img src={UserElizImage} alt="user"/>
            <div className="user__info">
              <h4>Elizabeth</h4>
              <p>Leading specialist of the Control Department</p>
              <p>noah.controldepartment@gmail...</p>
              <p>+38 (095) 924 66 37</p>
            </div>
          </div>
          <div className="users__card">
            <img src={UserElizImage} alt="user"/>
            <div className="user__info">
              <h4>Elizabeth</h4>
              <p>Leading specialist of the Control Department</p>
              <p>noah.controldepartment@gmail...</p>
              <p>+38 (095) 924 66 37</p>
            </div>
          </div>
          <div className="users__card">
            <img src={UserElizImage} alt="user"/>
            <div className="user__info">
              <h4>Elizabeth</h4>
              <p>Leading specialist of the Control Department</p>
              <p>noah.controldepartment@gmail...</p>
              <p>+38 (095) 924 66 37</p>
            </div>
          </div>
          <div className="users__card">
            <img src={UserElizImage} alt="user"/>
            <div className="user__info">
              <h4>Elizabeth</h4>
              <p>Leading specialist of the Control Department</p>
              <p>noah.controldepartment@gmail...</p>
              <p>+38 (095) 924 66 37</p>
            </div>
          </div>
          <div className="users__card">
            <img src={UserElizImage} alt="user"/>
            <div className="user__info">
              <h4>Elizabeth</h4>
              <p>Leading specialist of the Control Department</p>
              <p>noah.controldepartment@gmail...</p>
              <p>+38 (095) 924 66 37</p>
            </div>
          </div>
          <div className="users__card">
            <img src={UserElizImage} alt="user"/>
            <div className="user__info">
              <h4>Elizabeth</h4>
              <p>Leading specialist of the Control Department</p>
              <p>noah.controldepartment@gmail...</p>
              <p>+38 (095) 924 66 37</p>
            </div>
          </div>
        </div>
        <a href="#" className="btn btn-secondary">Show more</a>
      </section>
    </div>
  )
}

export default App
