import * as React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
// @ts-ignore
import ScreenShot from '../../images/vedomyscreenshot.png'
import './Vedomy.css'
// @ts-ignore
import DesktopView from '../../images/vedomyView.png'
// @ts-ignore
import ScreenShotPage from '../../images/vedomySSpage.png'
const VedomyPage = ({ setDetailPage }:any) => {

  useEffect(() => {
    document.body.style.overflowY = 'scroll'
  },[])
  
  const h1Ani = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
      }
    },
    hidden: {
      opacity: 0
    },
    exit: {
      transition: {
        duration: .5,
        delay: 1
      }
    }
  }

  const h3Ani = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.25,
        delay: 1.5
      }
    },
    hidden: {
      y: 100,
      opacity: 0
    },
    exit: {
      y: 100,
      transition: {
        duration: 1,
      }
    }
  }

  const ssAni = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1
      }
    },
    hidden: {
      opacity: 0,
      y: 300
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 1.5,
        delay: .5
      }
    }
  }

  const stackAni = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 2.5
      }
    },
    hidden: {
      opacity: 0
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1
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
        <Link to={`/vedomy`}>
          <button 
            className='backBtn2' 
            type='button'
            onClick={()=>setDetailPage(false)}
          >
            Back
          </button>
        </Link>
        <motion.img
          variants={ssAni}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
          className='vedomySS' 
          src={ScreenShot} 
          alt='Vedomy' 
        />
        <div className='type2Cont'>
        <motion.h3
          variants={h3Ani}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
        >
          Web App
        </motion.h3>
        </div>
        <div className='mainInfoCont'>
          <motion.h1
            variants={h1Ani}
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
          >
            Vedomy
          </motion.h1>

          <div className='vedomy4Btn'>
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
      </div>
    </motion.div>
  )
}

export default VedomyPage;