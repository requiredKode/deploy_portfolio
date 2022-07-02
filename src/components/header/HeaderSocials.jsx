import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div>
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/andr%C3%A9s-guzm%C3%A1n-serrano-cr/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/requiredKode" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
            <a href="https://www.youtube.com/channel/UC4iL1GAOqfJQef_g9hH1CFQ/featured" target="_blank" rel="noopener noreferrer"><BsYoutube/></a>
        </div>
    </div>
  )
}

export default HeaderSocials