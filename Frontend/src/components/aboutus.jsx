import React from "react";
import Home from "./Home";
import { Link as ScrollLink } from "react-scroll";

function Aboutus(){
    return(
        <>
        <div className="bg-blue-950 w-full h-48 flex justify-center gap-24 ">
            <div >
              <h1 className="text-2xl text-white m-14">ResuMatch</h1>  
            </div>
            <div>
                <h1 className="text-lg text-white m-6 mb-3 font-semibold">Quick Links</h1>
                <div className="flex flex-col ml-7 ">
                <ScrollLink to="home" smooth={true} duration={500}  offset={-70} className=" text-gray-300 hover:cursor-pointer">Home</ScrollLink>
                <ScrollLink to="features" smooth={true} duration={500}  offset={-70} className=" text-gray-300 "> Features</ScrollLink>
                <ScrollLink to="howitworks" smooth={true} duration={500}  offset={-70} className=" text-gray-300 ">How It Works</ScrollLink>
                <ScrollLink to="results" smooth={true} duration={500}  offset={-70} className=" text-gray-300 ">Results</ScrollLink>
               
                        
                </div>
            </div>
            <div>
                <h1 className="text-lg text-white m-6 mb-3 font-semibold">Company</h1>
                <div className="flex flex-col ml-7 ">
                <a href="#Aboutus" className="text-gray-300">About Us</a>
                <a href="#Aboutus" className="text-gray-300">Contact Us</a>
                <a href="#Aboutus" className="text-gray-300">Privacy Policy</a>
                <a href="#Aboutus" className="text-gray-300">Terms of Service</a>
                </div>
            </div>
            <div >
                <h1 className="text-lg text-white m-6 mb-3 font-semibold">Resources</h1>
                <div className="flex flex-col ml-7 ">
                <a href="#Aboutus" className="text-gray-300">Blog</a>
                <a href="#Aboutus" className="text-gray-300">FAQs</a>
                <a href="#Aboutus" className="text-gray-300">Resume Tips</a>
                <a href="#Aboutus" className="text-gray-300">Career Advice</a>
                </div>
            </div>
            <div>
                <h1 className="text-lg text-white m-6 font-semibold">Connect with Us</h1>
            </div>
        </div>
        </>
    )
}
export default Aboutus