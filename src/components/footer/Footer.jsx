import React from 'react'
import './footer.scss'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">GAMZA</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Potfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/gamza-ramazanov-790b7b231/"><BsLinkedin /></a>
        <a href="https://github.com/Gamza222"><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; GAMZA RAMAZANOV</small>
      </div>
    </footer>
  )
}

export default Footer
