import React from 'react'
import './experience.scss'
import { AiFillCheckCircle } from 'react-icons/ai'

const skills = 
  {
    title: 'Frontend Development',
    skill: [
      {
        title: 'HTML',
        lvl: 'Experienced',
      },
      {
        title: 'CSS/SCSS',
        lvl: 'Experienced',
      },
      {
        title: 'JavaScript',
        lvl: 'Intermediate',
      },
      {
        title: 'React',
        lvl: 'Intermediate',
      },
      {
        title: 'Redux',
        lvl: 'Intermediate',
      },
      {
        title: 'Gatsby/Grapghql',
        lvl: 'Intermediate',
      },
    ],
  }


const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="cotainer experience__container">
        <div className='experience__frontend'>
          <h3>{skills.title}</h3>
          <div className="experience__content">
            {skills.skill.map(item => {
              return(
                <article>
                  <AiFillCheckCircle />
                  <div>
                    <h4>{item.title}</h4>
                    <small className="text-light">{item.lvl}</small>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
