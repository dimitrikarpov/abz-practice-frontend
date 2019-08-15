import React from 'react'
import Navigation from '../navigation/Navigation'
import MailIcon from '../../../assets/icons/mail.svg'
import PhoneIcon from '../../../assets/icons/phone.svg'
import MobileIcon from '../../../assets/icons/cellphone.svg'
import FacebookIcon from '../../../assets/icons/facebook.svg'
import InstagramIcon from '../../../assets/icons/instagram.svg'
import LinkedinIcon from '../../../assets/icons/linkedin.svg'
import PinterestIcon from '../../../assets/icons/pinterest.svg'
import TwitterIcon from '../../../assets/icons/twitter.svg'

const Footer = () => {
  return (
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
  )
}

export default Footer
