import React from 'react'
import { motion } from 'framer-motion'
// @ts-ignore
import logo from '../../images/MainLogo.png'
import './Logo.css'
export default function Logo() {

  const firstNameAni = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2
      }
    },
    hidden: {
      opacity: 0,
      x: -700
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 1
      }
    }
  }

  const lastNameAni = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.75
      }
    },
    hidden: {
      opacity: 0,
      x: -700
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 1.25
      }
    }
  }

  const titleAni = {
    visible: {
      opacity: 1,
      height: "3rem",
      transition: {
        duration: 1.5,
        delay: 1.5
      }
    },
    hidden: {
      opacity: 0,
      height: 0
    },
    exit: {
      opacity: 0,
      y: 100,
      scale: (2),
      transition: {
        duration: 2
      }
    }
  }

  const logoAni = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        delay: .7
      }
    },
    hidden: {
      opacity: 0,
      x: 400
    },
    exit: {
      opacity: 0,
      x: 400,
      transition: {
        duration: 1.5
      }
    }
  }

  return (
    <motion.div
      className="wrapper"
    >
      <div className="userName">
        <motion.h1
          variants={firstNameAni}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
          id='top'
        >
          Hiroto
        </motion.h1>
        <motion.h1
          variants={lastNameAni}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
        >
          Robinson
        </motion.h1>
        <motion.h3
          variants={titleAni}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
        >
          Full Stack Web Developer
        </motion.h3>
      </div>
      <motion.div
        variants={logoAni}
        initial={"hidden"}
        animate={"visible"}
        exit={"exit"}
        className='logoDiv'
      >
        <img className="mainLogo"src={logo} alt="Main Logo" />
      </motion.div>
    </motion.div>
  )
}
