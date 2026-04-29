import React from 'react'
import logo from '../assets/logo.png'
function Navbar() {


  return (
    <>
     <nav className="flex items-center justify-between  px-6 ">
      <img src={logo} alt="image" className="h-28 "/> 
      
        <div className='flex items-center gap-11 '>
            <span className="text-xl font-serif ">Home</span>
            <span className='text-xl font-serif '> Features</span>
            <span className="text-xl font-serif ">How It Works</span>
            <span className="text-xl font-serif ">About Us</span>
        </div>
        <div className="flex items-center gap-4">
        <button className=' bg-blue-500 px-5 border  rounded-lg text-2xl font-semibold text-white py-2 hover:scale-110 hover:bg-green-600  transition duration-700 ease-in-out cursor-pointer hover:ring-4  '>Sign Up</button>
        <button className='px-5 border border-blue-500 rounded-lg text-2xl font-semibold text-blue-500 py-2 hover:scale-110 hover:bg-green-600 hover:text-white transition duration-700 ease-in-out cursor-pointer hover:ring-4'>Login</button>
        </div>
      </nav>
    </>
  )
}
export default Navbar