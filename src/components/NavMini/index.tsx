import React from 'react'
import { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'
import './NavMini.css'

export default function NavMini({ setFrameIdx, frameIdx, detailPage }: any) {
  
  const history = useHistory();

  const scrollPage = () => {
    
    switch(frameIdx) {
      case 0:
        history.push('/');
        break;
      case 1:
        history.push('/about');
        break;
      case 2:
        history.push('/kinetik')
        break;
      case 3:
        history.push('/contacts-crud');
        break;
      case 4:
        history.push('/ouicircles');
        break;
      case 5:
        history.push('/vedomy');
        break;
      default:
        return
    }
  }

useEffect(() => {
  scrollPage()
}, [frameIdx])

  return (
    <motion.div className={detailPage ? 'navMiniHide':'navMini'}>
      <Link to={'/'}>
        <div
          key={10}
          className='navCont'
          tabIndex={0}
          onClick={()=> {
            setFrameIdx(0);
          }}
        >
          <div className={frameIdx === 0? 'navLinkActive':'navLink'}/>
        </div>
      </Link>
      <Link to={'/about'}>
        <div
          key={20}
          className='navCont'
          tabIndex={0}
          onClick={()=> {
            setFrameIdx(1);
          }}
        >
          <div className={frameIdx === 1? 'navLinkActive':'navLink'} />
        </div>
      </Link>
      <Link to={'/kinetik'}>
        <div
          key={30}
          className='navCont'
          tabIndex={0}
          onClick={()=> {
            setFrameIdx(2);
          }}
        >
          <div className={frameIdx === 2? 'navLinkActive':'navLink'} />
        </div>
      </Link>
      <Link to={'/contacts-crud'}>
        <div
          key={40}
          className='navCont'
          tabIndex={0}
          onClick={()=> {
            setFrameIdx(3);
          }}
        >
          <div className={frameIdx === 3? 'navLinkActive':'navLink'} />
        </div>
      </Link>
      <Link to={'/ouicircles'}>
        <div
          key={50}
          className='navCont'
          tabIndex={0}
          onClick={()=> {
            setFrameIdx(4);
          }}
        >
          <div className={frameIdx === 4? 'navLinkActive':'navLink'} />
        </div>
      </Link>
      <Link to={'/vedomy'}>
        <div
          key={60}
          className='navCont'
          tabIndex={0}
          onClick={()=> {
            setFrameIdx(5);
          }}
        >
          <div className={frameIdx === 5? 'navLinkActive':'navLink'} />
        </div>
      </Link>
    </motion.div>
  )
}
