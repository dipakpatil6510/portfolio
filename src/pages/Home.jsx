import React from 'react'
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Internship from '../components/Internship';
import Contact from '../components/Contact';

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Internship/> 
      <Contact/>
    </div>
  )
}

export default Home;