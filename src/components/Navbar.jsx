import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <div className='fixed top-0 left-0 w-full bg-black text-white p-4 z-50'>
      <div className='flex flex-wrap justify-center gap-6'>
        <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-xl sm:text-lg md:text-base lg:text-sm' to="">Home</Link>
        <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-xl sm:text-lg md:text-base lg:text-sm' to="about">About</Link>
        <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-xl sm:text-lg md:text-base lg:text-sm' to="contact">Contact</Link>
        <Link className='transition-colors duration-300 hover:text-gray-400 font-bold text-xl sm:text-lg md:text-base lg:text-sm' to="service">Service</Link>
      </div>
    </div>

  )
}

export default Navbar