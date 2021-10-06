import * as React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
// @ts-ignore
import ScreenShot from '../../images/contactCrudSS.png'
import './ContactCRUD.css'
// @ts-ignore
import DesktopView from '../../images/crudView.png'
// @ts-ignore
import ScreenShotPage from '../../images/crudSSpage.png'
import Footer from '../../components/Footer'
const ContactCrudPage = ({ setDetailPage }:any) => {

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
      className='contactcrudPage'
    >
      <div className='project proj2'>
        <Link to={`/contacts-crud`}>
          <button 
            className='backBtn2' 
            type='button'
            onClick={()=>setDetailPage(false)}
          >
            Back
          </button>
        </Link>
        <a href={`https://gushihiro.github.io/contacts-crud/`} rel='noreferrer' target='_blank'>
          <motion.img
            variants={ssAni}
            initial={"hidden"} 
            animate={"visible"}
            exit={"exit"} 
            className='crudSS' 
            src={ScreenShot} 
            alt='Contacts-CRUD' 
          />
        </a>
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
            Contact CRUD
          </motion.h1>
          <div className='crud2Btn'>
            <a href={`https://gushihiro.github.io/contacts-crud/`} rel="noreferrer" target='_blank'>
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
            <a href={`https://github.com/Gushihiro/contacts-crud`} rel="noreferrer" target='_blank'>
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
            className='proj2Info'
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
      <div className='crudDetail'>
        <img className='crudDesktop' src={DesktopView} alt='Desktop'/>
        <h1>CRUD Application Utilizing Axios-Imported API Contacts</h1>
        <img className='crudSSpage' src={ScreenShotPage} alt='Contacts CRUD' />
        <div className='crudInfo'>
          <h1>Additional Technologies:</h1>
          <ul>
            <li>Material-Ui</li>
            <li>TypeScript</li>
            <li>Axios</li>
          </ul>
          <div className='crudMisc'>
            <p>Simple, fully-functioning CRUD application. </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactCrudPage;