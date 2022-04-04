import React from 'react'
import { CTA } from './CTA'
import "./Header.scss"
import ME from '../../assets/images/я3.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
          <h5>Hello, I'm</h5>
          <h1>Gamza Ramazanov</h1>
          <h5 className="text-light">Front-end Developer</h5>
          <CTA />
          <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me-photo"></img>
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
