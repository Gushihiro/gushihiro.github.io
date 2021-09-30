import * as React from 'react'
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
        <div className='proj2Btn'>
          <Link to={`https://gushihiro.github.io/contacts-crud/`} target='_blank'>
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
          <Link to={`https://github.com/Gushihiro/contacts-crud`} target='_blank'>
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
          Contact CRUD
        </motion.h1>
        <motion.h3
          variants={h3Ani}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
        >
          Web App
        </motion.h3>
        <Link to={`/contacts-crud`}>
          <button 
            className='backBtn2' 
            type='button'
            onClick={()=>setDetailPage(false)}
          >
            Back
          </button>
        </Link>
        <Link to={`https://gushihiro.github.io/contacts-crud/`} target='_blank'>
          <motion.img
            variants={ssAni}
            initial={"hidden"} 
            animate={"visible"}
            exit={"exit"} 
            className='crudSS' 
            src={ScreenShot} 
            alt='Contacts-CRUD' 
          />
        </Link>
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
      <Footer />
    </motion.div>
  )
}

export default ContactCrudPage;