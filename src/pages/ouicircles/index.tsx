import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Project3.css'
// @ts-ignore
import ScreenShot from '../../images/ouicirclesscreenshot.png'

export default function Project3({ scrollDir, setDetailPage }: any) {

  useEffect(() => {
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
      className='project proj3' 
      id='ouiCircles'
    >
      <Link to={'/ouicircles+'}>
        <motion.img 
          variants={ssAni}
          initial={"hidden"} 
          animate={"visible"}
          exit={"exit"}
          className='ouiSS' 
          src={ScreenShot} 
          alt='ouiCircles'
          onClick={()=>setDetailPage(true)}
        />
      </Link>
      <div className='typeCont'>
        <motion.h3
          variants={h3Ani}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
        >
          Event Forum
        </motion.h3>
      </div>
      <div className='mainInfoCont'>
        <motion.h1
          variants={h1Ani}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
        >
          ouiCircles
        </motion.h1>
        <div className='proj3Btn'>
        <Link to={`/ouicircles+`}>
          <motion.button 
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
          variants={stackAni}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
          className='proj3Info'
        >
          <h4>MySQL </h4>
          <h4>|</h4>
          <h4>Express </h4>
          <h4>|</h4>
          <h4>Handlebars </h4>
          <h4>|</h4>
          <h4>NodeJS </h4>
        </motion.div>
      </div>
    </motion.div>
  )
}
