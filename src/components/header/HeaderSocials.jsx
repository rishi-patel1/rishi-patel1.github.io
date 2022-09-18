import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/rishi-patel28/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/rishi-patel1" target="_blank" rel="noreferrer"><FaGithub/></a>
      <a href="https://www.instagram.com/_rishipatel_/" target="_blank" rel="noreferrer"><FiInstagram/></a>
      
    </div>
  )
}

export default HeaderSocials