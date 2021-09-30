import * as React from 'react'
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
        <motion.h1
          variants={h1Ani}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
        >
          Kinetik
        </motion.h1>
        <motion.h3
          variants={h3Ani}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
        >
          Web App
        </motion.h3>
        <Link to={`/kinetik`}>
          <button
            className='backBtn' 
            type='button'
            onClick={()=>setDetailPage(false)}
          >
            Back
          </button>
        </Link>
        <Link to={`http://kinetikapp.herokuapp.com/`} target='_blank'>
          <motion.img
            variants={ssAni}
            initial={"hidden"} 
            animate={"visible"}
            exit={"exit"}
            className='kinetikSS' 
            src={ScreenShot} 
            alt='Kinetik' 
          />
        </Link>
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
        <div className='proj1Btn'>
          <Link to={`http://kinetikapp.herokuapp.com/`} target='_blank'>
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
          <Link to={`https://github.com/Gushihiro/Kinetic`} target='_blank'>
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
      <Footer />
    </motion.div>
  )
}

export default KinetikPage;