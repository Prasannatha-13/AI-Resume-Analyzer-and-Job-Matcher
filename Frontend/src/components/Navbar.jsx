import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import logo from '../assets/logo.png'
import { useNavigate,useLocation } from 'react-router-dom'
import Signup from "./Signup.jsx"


function Navbar() {

   const navigate = useNavigate();
   const location = useLocation();


  const handleScroll = (section) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: section } });
    }
  };

  return (
        <nav className="flex items-center justify-between  px-6 ">
      <img src={logo} alt="image" className="h-28 "/> 
       
        <div className='flex items-center gap-11 '> 

        {location.pathname === "/" ? (
          <>
        
            <ScrollLink to="home" smooth={true} duration={500}  offset={-70} className="text-xl font-serif hover:cursor pointer">Home</ScrollLink>
            <ScrollLink to="features" smooth={true} duration={500}  offset={-70} className='text-xl font-serif hover:cursor-pointer'> Features</ScrollLink>
            <ScrollLink to="howitworks" smooth={true} duration={500}  offset={-70} className="text-xl font-serif hover:cursor-pointer">How It Works</ScrollLink>
            <ScrollLink to="results" smooth={true} duration={500}  offset={-70} className="text-xl font-serif hover:cursor-pointer ">Results</ScrollLink>
            <ScrollLink to="aboutus" smooth={true} duration={500}  offset={-70} className="text-xl font-serif hover:cursor-pointer">About Us</ScrollLink>
        
        
          </>
          
        ) : (
        
          <>
            <button onClick={() => handleScroll("home")} className="text-xl font-serif hover:cursor pointer" >Home</button>
            <button onClick={() => handleScroll("features")} className="text-xl font-serif hover:cursor pointer">Features</button>
            <button onClick={() => handleScroll("howitworks")} className="text-xl font-serif hover:cursor pointer">How It Works</button>
            <button onClick={() => handleScroll("results")} className="text-xl font-serif hover:cursor pointer">Results</button>
            <button onClick={() => handleScroll("aboutus")} className="text-xl font-serif hover:cursor pointer">About Us</button>

          </>
        )}
 
      </div>

      <div className="flex items-center gap-4">
        <button onClick={()=>{navigate('/signup')}} className=' bg-blue-500 px-5 border  rounded-lg text-2xl font-semibold text-white py-2 hover:scale-110 hover:bg-green-600  transition duration-700 ease-in-out cursor-pointer hover:ring-4'>Sign Up</button>
        <button onClick={()=>{navigate('/login')}} className='px-5 border border-blue-500 rounded-lg text-2xl font-semibold text-blue-500 py-2 hover:scale-110 hover:bg-green-600 hover:text-white transition duration-700 ease-in-out cursor-pointer hover:ring-4'>Login</button>
        </div>

    </nav>
  )
}
export default Navbar