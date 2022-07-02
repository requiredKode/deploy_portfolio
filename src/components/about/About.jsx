import React from 'react'
import './about.css'
import ME from '../../assets/someone3.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <p>I consider myself a curious person in technology and programming, I get ideas to do a lot of things, so I like to learn and develop.
            so I like to learn and develop.
          </p>
          <p>
            I like to make desktop applications, web and even video games.
            Everything that has good graphic quality excites me a lot and motivates me to want to learn to do similar things.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About