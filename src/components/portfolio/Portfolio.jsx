import React from 'react'
import './portfolio.scss'
import Quote from '../../assets/images/quote-machine.jpg'
import Todo from '../../assets/images/todo-list.jpg'
import DevSite from '../../assets/images/dev-site.jpg'
import Markdown from '../../assets/images/markdown.jpg'
import Travel1 from '../../assets/images/travel1.jpg'
import Travel2 from '../../assets/images/travel2.jpg'

const projects = [
  {
    url: Quote,
    title: 'Random-Quote Generator',
    demo: 'https://gamza222.github.io/random-quote-machine/',
    git: 'https://github.com/Gamza222/random-quote-machine',
  },
  {
    url: Todo,
    title: 'To-Do List',
    demo: 'https://gamza222.github.io/Todo-App/',
    git: 'https://github.com/Gamza222/Todo-App',
  },
  {
    url: DevSite,
    title: 'Site For LabsForDevs Company',
    demo: 'https://www.labsfordevs.com/',
    git: 'https://github.com/Gamza222/techsite',
  },
  {
    url: Markdown,
    title: 'Prewiewer For Markdown',
    demo: 'https://gamza222.github.io/markdown-preview/',
    git: 'https://github.com/Gamza222/markdown-preview',
  },
  {
    url: Travel1,
    title: 'Travel Website',
    demo: 'https://gamza222.github.io/gatsby-travel-website-v1/',
    git: 'https://github.com/Gamza222/gatsby-travel-website-v1',
  },
  {
    url: Travel2,
    title: 'Travel Website',
    demo: 'https://gamza222.github.io/gatsby-travel-website-v2/',
    git: 'https://github.com/Gamza222/gatsby-travel-website-v2',
  },

];

const Portfolio = () => {
  return (
    <section id="#portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        { 
          projects.map(item => {
            return (
              <article className="portfolio__item">
                <div className="portfolio-item-image">
                  <img src={item.url} alt="" />
                </div>
                <h3>{item.title}</h3>
                <div className="portfolio__item-cta">
                  <a href={item.git} target="_blank" className="btn">Github</a>
                  <a href={item.demo} target="_blank" className="btn btn-primary">Live Demo</a>
                </div>
              </article>
            )
          }) 
        }
      </div>
    </section>
  )
}

export default Portfolio
