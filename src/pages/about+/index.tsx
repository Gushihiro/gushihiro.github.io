import * as React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from '../../components/Footer'
import './AboutMe.css'

const AboutMePage = ({ setDetailPage }:any) => {

  const ssAni = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5
      }
    },
    hidden: {
      opacity: 0,
      scale: .7
    },
    exit: {
      opacity: 0,
      scale: .7,
      transition: {
        duration: 1.5
      }
    }
  }

  const textAni = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.3,
        delay: .5
      }
    },
    hidden: {
      opacity: 0,
      y: 100
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 1.3
      }
    }
  }

  const btnAni = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1
      }
    },
    hidden: {
      opacity: 0
    },
    exit: {
      opacity: 0,
      transition: {
        duration: .7
      }
    }
  }

  const pageAni = {
    initial: {
      y: 0
    },
    exit: {
      scale: .8,
      transition: {
        duration: 1.5,
        delay: .5
      }
    }
  }

  return (
    <motion.div
      variants={pageAni}
      initial={"inital"}
      exit={"exit"}
      transition={{
        duration: 1.1
      }}
      className='aboutMePage'
  >
      <h1 className='aboutTitle'>About Me Page</h1>
      <div className='aboutInfo'>
        <p>
          I'm Hiroto Robinson, a certified Full-Stack Web Developer with a passion for learning and a love for solving puzzles.
        </p>
        <p>
          I'm always searching for ways to improve, continue to develop skills, and obtain new knowledge in every facet of my life.
        </p>
        <p>
          As a team-oriented programmer, I believe I can be an asset to any company looking for a strong, motivated developer.
        </p>
        <h2>Contact Me @ robinsonhiroto@gmail.com</h2>
        <p>
          
        </p>
      </div>
      <Link to={`/about`}>
        <button 
          className='aboutBack' 
          type='button'
          onClick={()=>setDetailPage(false)}
        >
          Back
        </button>
      </Link>
      <Footer />
    </motion.div>
  )
}

export default AboutMePage;