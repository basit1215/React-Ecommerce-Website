import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    // <div style={{
    //   display: "flex",
    //   justifyContent: "center",
    //   gap: "80px",
    //   padding: "30px",
    //   backgroundColor: "black",
    //   color: "white"
    // }}>
    //   <Link className='hover:text-gray-400 font-bold text-xl' to="">Home</Link>
    //   <Link className='hover:text-gray-400 font-bold text-xl' to="about">About</Link>
    //   <Link className='hover:text-gray-400 font-bold text-xl' to="contact">Contact</Link>
    //   <Link className='hover:text-gray-400 font-bold text-xl' to="service">Service</Link>
    // </div>


    <div className='flex flex-wrap justify-center gap-6 p-4 bg-black text-white'>
  <Link className='hover:text-gray-400 font-bold text-xl sm:text-lg md:text-base lg:text-sm' to="">Home</Link>
  <Link className='hover:text-gray-400 font-bold text-xl sm:text-lg md:text-base lg:text-sm' to="about">About</Link>
  <Link className='hover:text-gray-400 font-bold text-xl sm:text-lg md:text-base lg:text-sm' to="contact">Contact</Link>
  <Link className='hover:text-gray-400 font-bold text-xl sm:text-lg md:text-base lg:text-sm' to="service">Service</Link>
</div>

  )
}

export default Navbar