import React from "react";

function Aboutus(){
    return(
        <>
        <div className="bg-blue-950 w-full h-38 flex justify-center gap-24">
            <div >
              <h1 className="text-2xl text-white m-14">ResuMatch</h1>  
            </div>
            <div>
                <h1 className="text-lg text-white m-6 mb-3 font-semibold">Quick Links</h1>
                <div className="flex flex-col ml-7 ">
                <a href="#Home" className="text-gray-300">Home</a>
                <a href="#Features" className="text-gray-300" >Features</a>
                <a href="#Howitworks" className="text-gray-300">How it works</a>
                <a href="#Aboutus" className="text-gray-300">About us</a>
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