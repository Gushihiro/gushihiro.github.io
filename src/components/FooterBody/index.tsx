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

const footerImgAni = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1
    }
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      delay: 1
    }
  }
}

const footerContAni = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 1.5
    }
  },
  hidden: {
    x: 300,
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 1,
    }
  }
}


export default function Footer() {
  return (
    <motion.div
      variants={footerImgAni}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      className='footerBodCont'
    >
      <motion.div 
        variants={footerContAni}
        initial={"hidden"}
        animate={"visible"}
        exit={"exit"}
        className="footer2"
      >
        <a href={'https://github.com/Gushihiro'} rel="noreferrer" target='_blank'>
          <img className="footerImg2" src={GitHubIcon} alt="GitHub" />
        </a>
        <a href={'https://www.linkedin.com/in/robinsonhiroto/'} rel="noreferrer" target='_blank'>
          <img className="footerImg2" src={LinkedinIcon} alt="linkedIn" />
        </a>
        <a href={'https://twitter.com/gushihiro'} rel="noreferrer" target='_blank'>
          <img className="footerImg2" src={TwitterIcon} alt="Twitter" />
        </a>
        <Link to={Resume} target='_blank'>
          <img className="footerImg2" src={ResumeIcon} alt="Twitter" />
        </Link>
      </motion.div>
    </motion.div>
  )
}
