"use client"


import React, { useState } from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'
const ResponsiveNavbar = () => {

  const[showNav ,SetShowNav]=useState(false);

  const showNavHandler=()=> SetShowNav(true)
  const closeNavHandler=()=> SetShowNav(false)

  return (
    <div>
      <Nav openNav={showNavHandler}/>
      <MobileNav showNav={showNav} closeNav={closeNavHandler}/>
    </div>
  )
}

export default ResponsiveNavbar
