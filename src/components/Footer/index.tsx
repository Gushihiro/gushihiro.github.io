import React from 'react'
import { Link } from 'react-router-dom'
// @ts-ignore
import GitHubIcon from '../../images/githubIcon.jpg'
// @ts-ignore
import LinkedinIcon from '../../images/LinkedinIcon.jpg'
// @ts-ignore
import TwitterIcon from '../../images/twitterIcon.jpg'
// @ts-ignore
import ResumeIcon from '../../images/resumeIcon.jpg'
// @ts-ignore
import HomeIcon from '../../images/homeIcon.png'
import './Footer.css'


export default function Footer() {
  return (
    <div className="footer">
      <div className="footerCont">
        <div className="socialLinks">
          <a href={'https://github.com/Gushihiro'} rel="noreferrer" target='_blank'>
            <img className="footerImg" src={GitHubIcon} alt="GitHub" />
          </a>
          <a href={'https://www.linkedin.com/in/robinsonhiroto/'} rel="noreferrer" target='_blank'>
            <img className="footerImg" src={LinkedinIcon} alt="linkedIn" />
          </a>
          <a href={'https://twitter.com/gushihiro'} rel="noreferrer" target='_blank'>
            <img className="footerImg" src={TwitterIcon} alt="Twitter" />
          </a>
        </div>
        <div className='copyright'>
          <p>© Copyright 2021 Hiroto Robinson | Gushihiro</p>
        </div>
      </div>
    </div>
  )
}
