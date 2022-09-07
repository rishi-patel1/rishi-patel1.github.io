import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpeg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpeg'
// import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'CampusBox',
    github: 'https://github.com/rishi-patel1/CampusBox',
  },
  {
    id:2,
    image: IMG2,
    title: 'Restaurant Location Analysis',
    github: 'https://github.com/rishi-patel1/Restaurant-Location-Analysis-Using-K-Means-Clustering-Algorithm-Python',
  },
  {
    id:3,
    image: IMG3,
    title: 'Crime Classification Using Spark',
    github: 'https://github.com/VarnaSatya/Crime-Classification-using-Spark',
  },
  {
    id:4,
    image: IMG4,
    title: 'Emotion Changer',
    github: 'https://github.com/rishi-patel1/EmotionChanger',
  },
  {
    id:5,
    image: IMG5,
    title: 'PassSaver',
    github: 'https://colab.research.google.com/drive/1unlgr_-yLhR5QN8V0oKViZrfuTAU1of3',
  }
  // {
  //   id:6,
  //   image: IMG6,
  //   title: 'INSERT TITLE HERE',
  //   github: 'https://github.com',
  // }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github})=>{
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn btn-primary'> GitHub</a>
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