import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
// @ts-ignore
import ScreenShot from '../../images/AboutImgSS.jpg'
import Footer from '../../components/FooterBody'
import './AboutPreview.css'

export default function AboutPreview({ scrollDir, setFrameIdx, setDetailPage }: any) {

  useEffect(() => {
    setDetailPage(false)
  }, [])

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
      scale: .7,
      opacity: 0,
      y: -200,
      transition: {
        duration: 1.5,
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

  const pageAniUp = {
    initial: {
      y: 0
    },
    exit: {
      y: '40%',
      transition: {
        duration: 1.5,
        delay: .5
      }
    }
  }

  const pageAniDown = {
    initial: {
      y: 0
    },
    exit: {
      y: '-40%',
      opacity: 0,
      transition: {
        duration: 1.5,
        delay: .5
      }
    }
  }

  return (
    <motion.div 
      variants={scrollDir==="up"? pageAniUp:pageAniDown}
      initial={"inital"}
      exit={"exit"}
      className="aboutPreview" 
      id='about'
    >
      <motion.img 
        key={3}
        variants={ssAni}
        initial={"hidden"}
        animate={"visible"}
        exit={"exit"}
        className='aboutPreSS' 
        src={ScreenShot} 
        alt="VSCode"
        onClick={()=>setDetailPage(true)}
      />
      <motion.h1
        key={4}
        variants={textAni}
        initial={"hidden"}
        animate={"visible"}
        exit={"exit"}
      >
        I Love Innovation, Efficiency, and Story
      </motion.h1>
      <div className='aboutBtn'>
        <Link to={'/about+'}>
          <motion.button 
            key={5}
            variants={btnAni}
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
            className='abBtn' 
            type='button'
            onClick={()=>{setDetailPage(true)}}
          >
            Learn More
          </motion.button>
        </Link>
      </div>
      <Footer />
    </motion.div>
  )
}
