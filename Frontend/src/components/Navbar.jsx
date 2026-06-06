import {React,useState} from 'react'
import { Link as ScrollLink } from 'react-scroll'
import logo from '../assets/logo.png'
import { useNavigate,useLocation,NavLink } from 'react-router-dom'
import Signup from "./Signup.jsx"
import Score from './score.jsx'
import { useEffect } from 'react'


function Navbar({info,results}) {
    
  const [signedIn,setsignedIn]=useState(false)
   const navigate = useNavigate();
   const location = useLocation();
   
   useEffect(()=>{
      if(info){
        setsignedIn(!!info);
      }
   },[info])

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
        {signedIn &&
        (
                    <NavLink
                           to="/score"
                              className={({ isActive }) =>
                               `p-2 pb-0 mb-0 rounded-md ${
                                   isActive
                           ? "bg-green-100 border-l-4 border-green-500 text-green-700 font-semibold"
                         : " text-xl font-semibold hover:bg-blue-100"
                            }`
                           }>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>

        </NavLink> )
        }
        </div>

    </nav>
  )
}
export default Navbar