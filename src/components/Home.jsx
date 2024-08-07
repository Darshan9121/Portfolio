import React from 'react'
import Projects from './Projects';
import Skills from './Skills';
import Navbar from './/Navbar';
import Banner from './Banner';
import Contact from "./Contact";
import Footer from "./Footer";
import Social from './Social';

const Home = () => {
   
  return (
    <div>
      
    <Banner/>
    <Skills/>
    <Projects/>
    <Social/>
    <Contact/>
    </div>
  )
}

export default Home;