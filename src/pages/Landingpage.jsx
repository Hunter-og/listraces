import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Work from '../components/Work'
import Top from '../components/Top'
import Work2 from '../components/Work2'
import Yarn from '../components/Yarn'
import Top2 from '../components/Top2'
import News from '../components/News'
import Business from '../components/Business'
import Footer from '../components/Footer'
import Footer2 from '../components/Footer2'


import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Props from '../components/data/Props'


export default function Landingpage() {
  return (

    <div>

      {/* <Props/> */}

      {/* <Home/> */}

      
      

      {/* <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Blog/>} path='/Blog'/>
      </Routes>
     
      </BrowserRouter>
       */}
      
      
  
        <Header/>
        <Hero/>
        <Work/>
        <Top/>
        <Work2/>
        <Top2/>
        <Yarn/>
        <News/>
        <Business/>
        <Footer/>
        <Footer2/>

        
      
    </div>
    
  )
}
