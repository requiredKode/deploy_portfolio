/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Andrés Guzmán S.</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/andr%C3%A9s-guzm%C3%A1n-serrano-cr/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/requiredKode" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        <a href="https://www.youtube.com/channel/UC4iL1GAOqfJQef_g9hH1CFQ/featured" target="_blank" rel="noopener noreferrer"><BsYoutube/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Andrés Guzmán S. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer