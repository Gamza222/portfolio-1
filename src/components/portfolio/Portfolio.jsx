import React from 'react'
import './portfolio.scss'
import Meta from '../../assets/images/meta.jpg'
import Todo from '../../assets/images/todo.jpg'
import DevSite from '../../assets/images/labsdesv-site.jpg'
import Markdown from '../../assets/images/markdown.jpg'
import Travel1 from '../../assets/images/travel1.jpg'
import Travel2 from '../../assets/images/travel2.jpg'

const projects = [
  {
    url: Meta,
    title: 'site for Metagochi company',
    demo: 'https://metagochi.com/',
    git: 'https://github.com/chrisbell08/metagochiWebsite',
  },
  {
    url: Todo,
    title: 'To-Do List',
    demo: 'https://gamza222.github.io/todo-app-ts/',
    git: 'https://github.com/Gamza222/todo-app-ts',
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
  {
    url: DevSite,
    title: 'Site for LabsforDevs company',
    demo: 'https://gamza222.github.io/techsite/',
    git: 'https://github.com/Gamza222/techsite/blob/master/README.md',
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
