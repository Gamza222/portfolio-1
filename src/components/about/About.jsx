import React from 'react'
import './about.scss'
import { FaAward } from 'react-icons/fa'
import { AiFillFolderAdd } from 'react-icons/ai'
import ME from '../../assets/images/me.jpg'

const cards = [
  {
    icon: <FaAward />,
    title: 'Experience',
    text: '2+ Years Working'
  },
  {
    icon: <AiFillFolderAdd />,
    title: 'Projects',
    text: '10+ Completed Projects'
  },
];

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
              { cards.map(card => {
              return (<article className="about__card">
                        {card.icon}
                        <h5>{card.title}</h5>
                        <small>{card.text}</small>
                      </article>)
              })
              }
            </div>
            <p>
            </p>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
