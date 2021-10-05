import * as React from 'react'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet'
// Components
import ComponentCarousel from './components/ComponentCarousel'
import NavMini from './components/NavMini'
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

// Images
//@ts-ignore
import Spacer2 from '../images/wavetopspacer.svg'

// Styles
import './index.css'

// markup
const IndexPage = () => {

  const allFrames = [
    "Header", 
    "AboutMe", 
    "Kinetik", 
    "ContactsCRUD",
    "ouiCircles",
    "Vedomy"
  ]

  const [frameIdx, setFrameIdx] = useState(0)
  const [scrollDir, setScrollDir] = useState("none")
  const [detailPage, setDetailPage] = useState(false)

  const handleIncrement = () => {
    setScrollDir("down")
    if (frameIdx < 5) {
      setFrameIdx(frameIdx + 1)
    } else {
      return
    }
  }

  const handleDecrement = () => {
    setScrollDir("up")
    if (frameIdx > 0) {
        setFrameIdx(frameIdx - 1)
    } else {
      return
    }
  }

  useEffect(() => {
  }, [frameIdx])

  return (
    <Router>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Portfolio | Hiro</title>
      <meta
        property='og:image' 
        content='https://i.gyazo.com/1adddc1f6639866f4b08c1e3e5ce58d6.png'
      />
      <meta
        property='og:title'
        content='Portfolio | Hiro'
      />
      <meta
        property='og:site_name'
        content='Gushihiro'
      />
      <meta
        property='og:type'
        content='website'
      />
      <meta
        property='og:url' 
        content='https://gushihiro.me'
      />
      <meta
        property='og:description'
        content="My current Portfolio"
      />
      <meta
        name="description"
        content="My current Portfolio"
      />
    </Helmet>
    <AnimatePresence
      exitBeforeEnter
    >
      <ReactScrollWheelHandler
        upHandler={()=> {
          if (detailPage) {
            return
          } else {
            handleDecrement()
          }
        }}
        downHandler={async ()=> {
          if (detailPage) {
            return
          } else {
            handleIncrement()
          }
        }}
        wheelConfig={[7, 100, .05, 0]}
      >
      <motion.div
        animate={{ opacity: 1}} 
        initial={{ opacity: 0}}
        transition={{ duration: 1.1 }} 
        className='mainPage'
        id='mainPageX'
      >
        <ComponentCarousel 
          setFrameIdx={setFrameIdx}
          frameIdx={frameIdx}
          scrollDir={scrollDir}
          setDetailPage={setDetailPage}
        />
        <NavMini
        setFrameIdx={setFrameIdx}
        scrollDir={scrollDir}
        frameIdx={frameIdx}
        detailPage={detailPage}
        />
      </motion.div>
      </ReactScrollWheelHandler>
    </AnimatePresence>
    </Router>
  )
}

export default IndexPage
