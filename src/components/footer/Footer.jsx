import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#top" className="footer__logo">RISHI PATEL</a>

      <ul className="permalinks">
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100016670553009"><FaFacebookF/></a>
        <a href="https://www.instagram.com/_rishipatel_/"><FiInstagram/></a>
        <a href="https://twitter.com/__rishipatel__"><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Rishi Patel. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer