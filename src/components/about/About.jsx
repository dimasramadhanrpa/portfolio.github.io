import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {TiFolderOpen} from 'react-icons/ti'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me_image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__content_cards">
            <article className='about__content_cards_article'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ working experience</small>
            </article>

            <article className='about__content_cards_article'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ clients Worldwide</small>
            </article>

            <article className='about__content_cards_article'>
              <TiFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>  

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi maiores excepturi perferendis temporibus possimus nam ut. Error natus fugit, qui modi officia, cupiditate, velit possimus culpa quae enim id! Quia!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  ) 
}

export default About