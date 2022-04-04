import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/gamza-ramazanov-790b7b231/" target="_blank" className=""><BsLinkedin /><a/></a>
      <a href="https://github.com/Gamza222" target="_blank" className=""><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials
