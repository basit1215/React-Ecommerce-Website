import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <>
   <h1>ABOUT</h1>
   <Link to="">Software Developer</Link>
   <Link to="designer">Graphics Designer</Link>
   <Link to="editor">Video Editor</Link>
   <Outlet/>
 </>
  )
}

export default About