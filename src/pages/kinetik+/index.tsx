import * as React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
// @ts-ignore
import ScreenShot from '../../images/kinetikSS.png'
import './Kinetik.css'
// @ts-ignore
import DesktopView from '../../images/kinetikView.png'
// @ts-ignore
import ScreenShotPage from '../../images/kinetikSSpage.png'
// @ts-ignore
import GoalsSnip from '../../images/kinetikGoals1.png'
// @ts-ignore
import GoalsSnip2 from '../../images/kinetikGoals2.png'
// @ts-ignore
import GoalsSnip3 from '../../images/kinetikGoals3.png'
// @ts-ignore
import CalendarSnip from '../../images/kinetikCalendar.png'

import Footer from '../../components/Footer'


const KinetikPage = ({ setDetailPage }:any) => {
  
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
      scale: .8,
      opacity: 0,
      transition: {
        duration: 1.5,
        delay: .5
      }
    }
  }

  return (
    <motion.div 
      variants={pageAni}
      initial={"initial"}
      exit={"exit"}
      transition={{
        duration: 1.1
      }}
      className='kinetikPage'
    >
      <div className='project proj1'>
        <Link to={`/kinetik`}>
          <button
            className='backBtn' 
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
          className='kinetikSS' 
          src={ScreenShot} 
          alt='Kinetik' 
        />
        <div className='typeCont'>
          <motion.h3
            key={7}
            variants={h3Ani}
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
          >
            Web App
          </motion.h3>
        </div>
        <div className='mainInfoCont'>
          <motion.div
            key={6}
            variants={h1Ani}
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
            className='headingCont'
          >
            <h1>
              Kinetik
            </h1>
          </motion.div>
          <div className='kinetik1Btn'>
            <a href={`http://kinetikapp.herokuapp.com/`} rel='noreferrer' target='_blank'>
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
            </a>
            <a href={`https://github.com/Gushihiro/Kinetic`} rel='noreferrer' target='_blank'>
              <motion.button
                variants={btnAni}
                initial={"hidden"}
                animate={"visible"}
                exit={"exit"}
                className='btn'
              >
                View GitHub
              </motion.button>
            </a>
          </div>
          <motion.div 
            variants={stackAni}
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
            className='proj1Info'
          >
            <h4>MySQL </h4>
            <h4>|</h4>
            <h4>Express </h4>
            <h4>|</h4>
            <h4>React </h4>
            <h4>|</h4>
            <h4>NodeJS </h4>
          </motion.div>
        </div>
      </div>
      <div className='kinetikDetail'>
        <img className='kinetikDesktop' src={DesktopView} alt='Desktop'/>
        <h1>A Social Goal Tracking Web Application</h1>
        <img className='kinetikSSPage' src={ScreenShotPage} alt='Kinetik' />
        <div className='kinetikInfo'>
          <h1>Additional Technologies:</h1>
          <ul>
            <li>SASS</li>
            <li>React Calendar</li>
            <li>MomentJS</li>
            <li>Axios</li>
            <li>Bootstrap</li>
            <li>Material-Ui</li>
            <li>Nodemailer</li>
            <li>JSONWebtoken</li>
            <li>BCrypt</li>
            <li>Sequelize</li>
          </ul>
          <div className='kinetikGoal'>
            <h2>Kinetik allows for a variety of options for goal tracking.</h2>
            <div className='goalDiv'>
              <img className='goalSnip' src={GoalsSnip} alt='Kinetik Goals Options' />
              <img className='goalSnip2' src={GoalsSnip2} alt='Kinetik Goals Options' />
              <img className='goalSnip3' src={GoalsSnip3} alt='Kinetik Goals Options' />
            </div>
          </div>
          <div className='kinetikCal'>
            <h2>Use the Calendar to Track Your Progress</h2>
            <img className='calendarSnip' src={CalendarSnip} alt='Kinetik Calendar' />
            <div className='calendarMisc'>
              <p>The calendar displays what days you've completed your goals. If even a single goal is left unfinished, the day is marked with a red dot. If you complete all your goals, a blue.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default KinetikPage;