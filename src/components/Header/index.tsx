import * as React from 'react'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Components
import Logo from '../Logo'
import Footer from '../Footer'
// Images
// @ts-ignore
import Spacer from '../../images/wavebackground2.svg'

// Styles
import './Header.css'

// markup
const Header = () => {

  useEffect(() => {
    document.body.style.overflowY = 'hidden'
  },[])

  const scrollAni = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        delay: 1
      }
    },
    hidden: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 1.5,
      }
    },
  }

  const spacerAni = {
    visible: {
      y: 0,
      transition: {
        duration: 1.2
      }
    },
    hidden: {
      y: '-75vh',
      transition: {
        duration: 1.2
      }
    },
    exit: {
      y: '-100vh',
      transition: {
        duration: 1.2
      }
    }
  }

  const pageAni = {
    initial: {
      y: '-40%'
    },
    animate: {
      y: 0,
      transition: {
        duration: 1.5
      }
    },
    exit: {
      y: '-80%',
      transition: {
        duration: 1.5,
        delay: 1
      }
    }
  }

  return (
      <motion.div 
        variants={pageAni}
        initial={"inital"}
        animate={"animate"}
        exit={"exit"}
        className='header'
      >
        <Logo />
        <div className='navContent'>
          <motion.p
            key={1}
            variants={scrollAni}
            animate={"visible"}
            initial={"hidden"}
            exit={"hidden"}
          >
            //Scroll Down -
          </motion.p>
        </div>
        <motion.div
          key={2}
          variants={spacerAni}
          initial={"hidden"}
          animate={"visible"}
          className='spacer' 
          // src={Spacer} 
          // alt="space" 
        /> 
        <Footer />     
      </motion.div>
    )
}

export default Header;