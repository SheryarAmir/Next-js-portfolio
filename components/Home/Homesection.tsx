import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import Project from './Project/Project'
import Skill from './Skill/Skill'
import Reviews from './Reviews/Reviews'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'


const Homesection = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Project/>
      <Skill/>
      <Reviews/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default Homesection
