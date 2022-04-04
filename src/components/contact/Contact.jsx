import React from 'react'
import './contact.scss'
import { HiOutlineMail } from 'react-icons/hi'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container container__contact">
        <article className="contact__option">
          <HiOutlineMail />
          <h4>Email</h4>
          <h5>gamza2003nani@mail.ru</h5>
          <a target="_blank" href="mailto:gamza2003nani@mail.ru">Send Message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp />
          <h4>WhatsApp</h4>
          <h5>+79685740730</h5>
          <a target="_blank" href="https://wa.me/79685740730">Send Message</a>
        </article>
      </div>
    </section>
  )
}

export default Contact
