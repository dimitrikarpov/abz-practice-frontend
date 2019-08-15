import React, { useState } from 'react'
import HeaderLogo from './assets/logo/logo.svg'
import AboutImg from './assets/imgs/man-mobile.svg'
import JSImage from './assets/imgs/javascript.svg'
import CSSImage from './assets/imgs/css.svg'
import HTMLImage from './assets/imgs/html.svg'
import UserElizImage from './assets/imgs/user-elizabeth-2x.jpg'
import MailIcon from './assets/icons/mail.svg'
import PhoneIcon from './assets/icons/phone.svg'
import MobileIcon from './assets/icons/cellphone.svg'
import FacebookIcon from './assets/icons/facebook.svg'
import InstagramIcon from './assets/icons/instagram.svg'
import LinkedinIcon from './assets/icons/linkedin.svg'
import PinterestIcon from './assets/icons/pinterest.svg'
import TwitterIcon from './assets/icons/twitter.svg'
import MenuIcon from './assets/icons/line-menu.svg'
import Navigation from './components/navigation/Navigation'
import MobileNavigation from './components/mobileNavigation/MobileNavigation'
import UserInfo from './components/userInfo/UserInfo'
import SignUp from './components/signUp/SignUp'

import Notification from './components/notification/Notification'

function App() {
  const [sideDraw, setSideDraw] = useState(false)

  const toggleSideDraw = () => {
    setSideDraw(!sideDraw)
  }

  return (
    <div className="App">
      <header>
        <img className="header__logo" src={HeaderLogo} alt="logo" />
        <Navigation />
        <UserInfo />
        <img
          src={MenuIcon}
          className="nav-icon"
          onClick={toggleSideDraw}
          alt="menu"
        />
      </header>

      <section id="banner">
        <div className="banner-left">
          <h1 className="banner__title">
            Test assignment for Frontend Developer position
          </h1>
          <p className="banner__text">
            We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository.{' '}
            <span>
              Please be patient, we consider and respond to every application
              that meets minimum requirements. We look forward to your
              submission. Good luck!
            </span>
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

      <section id="requirements">
        <h2 className="requirements__title">
          General requirements for the test task
        </h2>
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
          <div className="requirements__image" />
        </div>
      </section>

      <section id="users">
        <h2>Our cheerful users</h2>
        <h5>Attention! Sorting users by registration date</h5>
        <div className="users-grid">
          <div className="users__card">
            <img src={UserElizImage} alt="user" />
            <div className="user__info">
              <h4>Elizabeth</h4>
              <p>Leading specialist of the Control Department</p>
              <p>noah.controldepartment@gmail...</p>
              <p>+38 (095) 924 66 37</p>
            </div>
          </div>
          <div className="users__card">
            <img src={UserElizImage} alt="user" />
            <div className="user__info">
              <h4>Elizabeth</h4>
              <p>Leading specialist of the Control Department</p>
              <p>noah.controldepartment@gmail...</p>
              <p>+38 (095) 924 66 37</p>
            </div>
          </div>
          <div className="users__card">
            <img src={UserElizImage} alt="user" />
            <div className="user__info">
              <h4>Elizabeth</h4>
              <p>Leading specialist of the Control Department</p>
              <p>noah.controldepartment@gmail...</p>
              <p>+38 (095) 924 66 37</p>
            </div>
          </div>
          <div className="users__card">
            <img src={UserElizImage} alt="user" />
            <div className="user__info">
              <h4>Elizabeth</h4>
              <p>Leading specialist of the Control Department</p>
              <p>noah.controldepartment@gmail...</p>
              <p>+38 (095) 924 66 37</p>
            </div>
          </div>
          <div className="users__card">
            <img src={UserElizImage} alt="user" />
            <div className="user__info">
              <h4>Elizabeth</h4>
              <p>Leading specialist of the Control Department</p>
              <p>noah.controldepartment@gmail...</p>
              <p>+38 (095) 924 66 37</p>
            </div>
          </div>
          <div className="users__card">
            <img src={UserElizImage} alt="user" />
            <div className="user__info">
              <h4>Elizabeth</h4>
              <p>Leading specialist of the Control Department</p>
              <p>noah.controldepartment@gmail...</p>
              <p>+38 (095) 924 66 37</p>
            </div>
          </div>
        </div>
        <a href="#" className="btn btn-secondary">
          Show more
        </a>
      </section>

      <SignUp />

      <footer>
        <div className="footer__top">
          <span className="logo" />
          <Navigation variant="white" />
        </div>
        <div className="footer__bottom">
          <div className="footer__email">
            <div className="footer__email-icon">
              <img src={MailIcon} alt="email" />
            </div>
            <div>work.of.future@gmail.com</div>
          </div>
          <div className="footer__links">
            <ul>
              <li>News</li>
              <li>Blog</li>
              <li>Partners</li>
              <li>Shop</li>
            </ul>
            <ul>
              <li>Overview</li>
              <li>Design</li>
              <li>Code</li>
              <li>Collaborate</li>
            </ul>
            <ul>
              <li>Resources</li>
              <li>Guides</li>
              <li>Examples</li>
            </ul>
            <ul>
              <li>FAQ</li>
              <li>Terms</li>
              <li>Conditions</li>
              <li>Help</li>
            </ul>
          </div>
          <div className="footer__phones">
            <div className="footer__phones-item">
              <div className="footer__phones-icon">
                <img src={PhoneIcon} alt="phone" />
              </div>
              <div className="footer__phones-text">+38 (095) 556 08 45</div>
            </div>
            <div className="footer__phones-item">
              <div className="footer__phones-icon">
                <img src={MobileIcon} alt="mobile" />
              </div>
              <div className="footer__phones-text">+38 (050) 789 24 98</div>
            </div>
          </div>
          <div className="footer__copyright">
            © abz.agency specially for the test task
          </div>
          <div className="footer__socials">
            <a href="#">
              <img src={FacebookIcon} alt="facebook" />
            </a>
            <a href="#">
              <img src={LinkedinIcon} alt="linkedin" />
            </a>
            <a href="#">
              <img src={InstagramIcon} alt="instagram" />
            </a>
            <a href="#">
              <img src={TwitterIcon} alt="twitter" />
            </a>
            <a href="#">
              <img src={PinterestIcon} alt="pinterest" />
            </a>
          </div>
        </div>
      </footer>

      <MobileNavigation visible={sideDraw} onClose={toggleSideDraw} />
      <Notification
        visible={false}
        title="Congratulations"
        message="You have succefully passed the registration"
        onClose={() => true}
      />
    </div>
  )
}

export default App
