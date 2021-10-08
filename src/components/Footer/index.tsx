import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
// @ts-ignore
import GitHubIcon from '../../images/githubIcon.jpg'
// @ts-ignore
import LinkedinIcon from '../../images/LinkedinIcon.jpg'
// @ts-ignore
import TwitterIcon from '../../images/twitterIcon.jpg'
// @ts-ignore
import ResumeIcon from '../../images/resumeIcon.jpg'
// @ts-ignore
import Resume from '../../docs/Hiroto_Robinson_Resume.pdf'
// @ts-ignore
import HomeIcon from '../../images/homeIcon.png'
import './Footer.css'

const footerAni = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      delay: 2
    }
  },
  hidden: {
    opacity: 0,
    x: -200
  },
  exit: {
    opacity: 0,
    x: -175,
    transition: {
      duration: 1, 
    }
  }
}

export default function Footer() {
  return (
    <motion.div 
      variants={footerAni}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      className="socialLinks"
    >
      <a href={'https://github.com/Gushihiro'} rel="noreferrer" target='_blank'>
        <img className="footerImg" src={GitHubIcon} alt="GitHub" />
      </a>
      <a href={'https://www.linkedin.com/in/robinsonhiroto/'} rel="noreferrer" target='_blank'>
        <img className="footerImg" src={LinkedinIcon} alt="linkedIn" />
      </a>
      <a href={'https://twitter.com/gushihiro'} rel="noreferrer" target='_blank'>
        <img className="footerImg" src={TwitterIcon} alt="Twitter" />
      </a>
      <Link to={Resume} target='_blank'>
        <img className="footerImg" src={ResumeIcon} alt="Twitter" />
      </Link>
    </motion.div>
  )
}
