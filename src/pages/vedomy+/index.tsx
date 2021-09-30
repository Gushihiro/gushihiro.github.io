import * as React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
// @ts-ignore
import ScreenShot from '../../images/vedomyscreenshot.png'
import './Vedomy.css'
// @ts-ignore
import DesktopView from '../../images/vedomyView.png'
// @ts-ignore
import ScreenShotPage from '../../images/vedomySSpage.png'
import Footer from '../../components/Footer'
const VedomyPage = ({ setDetailPage }:any) => {

  const h1Ani = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delay: .5
      }
    },
    hidden: {
      x: 400,
      opacity: 0
    },
    exit: {
      x: 100,
      opacity: 0,
      transition: {
        duration: 1
      }
    }
  }

  const h3Ani = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delay: .5
      }
    },
    hidden: {
      x: -400,
      opacity: 0
    },
    exit: {
      x: -100,
      opacity: 0,
      transition: {
        duration: 1
      }
    }
  }

  const ssAni = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5
      }
    },
    hidden: {
      opacity: 0,
      x: -100
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 1.5,
        delay: .7
      }
    }
  }

  const stackAni = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 1.3
      }
    },
    hidden: {
      y: 100,
      opacity: 0
    },
    exit: {
      y: 50,
      opacity: 0,
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
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 1.5,
        delay: .5
      }
    }
  }

  return (
    <motion.div 
    variants={pageAni}
    initial={"hidden"}
    animate={"visible"}
    exit={"exit"}
      className='vedomyPage'
    >
      <div className='project proj4'>
        <div className='proj4Btn'>
          <Link to={`https://gushihiro.github.io/Vedomy/`} target='_blank'>
          <motion.button
            variants={btnAni}
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
            className='btn' 
            type='button'
          >
            View Site
          </motion.button>
          </Link>
          <Link to={`https://github.com/Gushihiro/Vedomy`} target='_blank'>
          <motion.button
            variants={btnAni}
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
            className='btn'
          >
            View GitHub
          </motion.button>
          </Link>
        </div>
        <motion.h1
          variants={h1Ani}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
        >
          Vedomy
        </motion.h1>
        <motion.h3
          variants={h3Ani}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
        >
          Web App
        </motion.h3>
        <Link to={`/vedomy`}>
          <button 
            className='backBtn2' 
            type='button'
            onClick={()=>setDetailPage(false)}
          >
            Back
          </button>
        </Link>
        <Link to={`https://gushihiro.github.io/Vedomy/`} target='_blank'>
          <motion.img
            variants={ssAni}
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
            className='vedomySS' 
            src={ScreenShot} 
            alt='Vedomy' 
          />
        </Link>
        <motion.div 
          variants={stackAni}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
          className='proj4Info'
        >
          <h4>MySQL </h4>
          <h4>|</h4>
          <h4>Express </h4>
          <h4>|</h4>
          <h4>JavaScript </h4>
          <h4>|</h4>
          <h4>NodeJS</h4>
        </motion.div>
      </div>
      <div className='vedomyDetail'>
        <img className='vedomyDesktop' src={DesktopView} alt='Desktop'/>
        <h1>A Meditation App with Personal Wellness Tracking Applicability </h1>
        <img className='vedomySSpage' src={ScreenShotPage} alt='Vedomy' />
        <div className='vedomyInfo'>
          <h1>Additional Technologies:</h1>
          <ul>
            <li>MomentJS</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Materialize</li>
          </ul>
          <div className='vedomyMisc'>
            <p>Track your mood, meditate using the animated breathing box, and receive new recipes, yoga poses, and motivational quotes daily.</p>
          </div>
        </div>
        <Footer />
      </div>
    </motion.div>
  )
}

export default VedomyPage;