import React from 'react'
import { Route, Switch, useLocation, useHistory } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './ComponentCarousel.css'

import Header from '../Header'
import AboutPreview from '../../pages/about'
import AboutDetails from '../../pages/about+'
import Project1 from '../../pages/kinetik'
import KinetikDetails from '../../pages/kinetik+'
import Project2 from '../../pages/contacts-crud'
import CrudDetails from '../../pages/contacts-crud+'
import Project3 from '../../pages/ouicircles'
import OuiCirclesDetails from '../../pages/ouicircles+'
import Project4 from '../../pages/vedomy'
import VedomyDetails from '../../pages/vedomy+'


export default function ComponentCarousel({ scrollDir, setFrameIdx, setDetailPage }: any) {
  const location = useLocation();
  
  return (
    <AnimatePresence
      exitBeforeEnter
    >
      <Switch location={location} key={location.pathname}>
        <Route path='/project/vedomy+'>
          <VedomyDetails 
            setDetailPage={setDetailPage}
          />
        </Route>
        <Route path='/project/vedomy'>
          <Project4
            setDetailPage={setDetailPage}
            scrollDir={scrollDir}
          />
        </Route>
        <Route path='/project/ouicircles+'>
          <OuiCirclesDetails 
            setDetailPage={setDetailPage}
          />
        </Route>
        <Route path='/project/ouicircles'>
          <Project3
          setDetailPage={setDetailPage}
            scrollDir={scrollDir}
          />
        </Route>
        <Route path='/project/contacts-crud+'>
          <CrudDetails 
            setDetailPage={setDetailPage}
          />
        </Route>
        <Route path='/project/contacts-crud'>
          <Project2
            setDetailPage={setDetailPage}
            scrollDir={scrollDir}
          />
        </Route>
        <Route path='/project/kinetik+'>
          <KinetikDetails 
            setDetailPage={setDetailPage}
          />
        </Route>
        <Route path='/project/kinetik'>
          <Project1
            setDetailPage={setDetailPage}
            scrollDir={scrollDir}
          />
        </Route>
        <Route path='/project/about+'>
          <AboutDetails 
            setDetailPage={setDetailPage}
          />
        </Route>
        <Route path='/project/about'>
          <AboutPreview
            scrollDir={scrollDir}
            setDetailPage={setDetailPage}
          />
        </Route>
        <Route path='/'>
          <Header />
        </Route>
      </Switch>
    </AnimatePresence>
  )
}



