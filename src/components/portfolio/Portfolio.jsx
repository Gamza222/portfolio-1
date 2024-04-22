import React from 'react';
import './portfolio.scss';
import Meta from '../../assets/images/meta.jpg';
import Pepe from '../../assets/images/pepe.png';
import DevSite from '../../assets/images/labsdesv-site.jpg';
import Markdown from '../../assets/images/markdown.jpg';
import Travel1 from '../../assets/images/travel1.jpg';
import Travel2 from '../../assets/images/travel2.jpg';
import Firmder from '../../assets/images/firmder.png';
import Zk from '../../assets/images/zksync.png';

const projects = [
  {
    url: Zk,
    title: 'zkSync',
    demo: 'https://zksync.io/',
    git: false,
  },
  {
    url: Meta,
    title: 'Metagochi landing',
    demo: 'https://metagochi.com/',
    git: 'https://github.com/chrisbell08/metagochiWebsite',
  },
  {
    url: Pepe,
    title: 'Pepe crypto landing',
    demo: 'https://gamza222.github.io/pepewebsite/',
    git: 'https://github.com/Gamza222/pepewebsite/',
  },

  {
    url: Travel1,
    title: 'Travel more',
    demo: 'https://gamza222.github.io/gatsby-travel-website-v1/',
    git: 'https://github.com/Gamza222/gatsby-travel-website-v1',
  },
  {
    url: DevSite,
    title: 'LabsforDevs landing',
    demo: 'https://gamza222.github.io/techsite/',
    git: 'https://github.com/Gamza222/techsite/blob/master/README.md',
  },
  {
    url: Firmder,
    title: 'Firmder landing',
    demo: 'https://firmder.com/',
    git: false,
  },
  {
    url: Markdown,
    title: 'Prewiewer For Markdown',
    demo: 'https://gamza222.github.io/markdown-preview/',
    git: 'https://github.com/Gamza222/markdown-preview',
  },
  {
    url: Travel2,
    title: 'Gatsby travel Website',
    demo: 'https://gamza222.github.io/gatsby-travel-website-v2/',
    git: 'https://github.com/Gamza222/gatsby-travel-website-v2',
  },
];

const Portfolio = () => {
  return (
    <section id='#portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {projects.map(item => {
          return (
            <article className='portfolio__item'>
              <div className='portfolio-item-image'>
                <img src={item.url} alt='' />
              </div>
              <h3>{item.title}</h3>
              <div className='portfolio__item-cta'>
                {item.git ? (
                  <a href={item.git} target='_blank' className='btn'>
                    Github
                  </a>
                ) : (
                  <p className='btn'>Private repo</p>
                )}
                <a href={item.demo} target='_blank' className='btn btn-primary'>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
