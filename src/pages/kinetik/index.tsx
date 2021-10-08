import { useEffect } from 'react'
import './Project1.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
// @ts-ignore
import ScreenShot from '../../images/kinetikSS.png'
// @ts-ignore
import frontImg from '../../images/kinetic-logo.png'
export default function Project1({ scrollDir, setDetailPage }: any) {

  useEffect(() => {
    setDetailPage(false)
    document.body.style.overflowY = 'hidden'
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
        duration: 1.5,
        delay: .5
      }
    },
    hidden: {
      opacity: 0,
      y: 500
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
        duration: .75
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
      opacity: 0,
      transition: {
        duration: 1,
        delay: 1.25
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
        duration: 1,
        delay: 1.25
      }
    }
  }

  return (
    <motion.div 
      variants={scrollDir==="up"? pageAniUp:pageAniDown}
      initial={"initial"}
      exit={"exit"}
      className='project proj1' 
      id='kinetik'
    >
      <motion.img 
        key={8}
        variants={ssAni}
        initial={"hidden"} 
        animate={"visible"}
        exit={"exit"}
        className='kinetikSS' 
        src={ScreenShot} 
        alt='Kinetik'
        onClick={()=>setDetailPage(true)}
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
        <div className='proj1Btn'>
          <Link to={`/kinetik+`}>
            <motion.button
              key={10}
              variants={btnAni}
              initial={"hidden"}
              animate={"visible"}
              exit={"exit"}
              className='btn' 
              type='button'
              onClick={()=>setDetailPage(true)}
              >
              Details
          </motion.button>
          </Link>
        </div>
        <motion.div 
          key={9}
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
    </motion.div>
  )
}
