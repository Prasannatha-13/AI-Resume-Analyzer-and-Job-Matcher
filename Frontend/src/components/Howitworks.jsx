import React from "react";
import tree from "/tree.png"
import goal from "/goal.png"


function Howitworks(){
    return(
        <>
        <h1 className="text-3xl font-bold text-center m-10 mb-7 ">How It Works</h1>
        <div className="flex justify-center gap-5 items-center bg-blue-50 h-32 ">
            <div className="h-28 w-80 flex justify-center rounded-lg p-4 gap-1 ">
                <button className="border bg-green-400 rounded-full h-6 w-10 text-white font-bold">1</button>
                <img src={tree} className="h-14 w-14 rounded-full"/>
                <div>
                <p className=" m-1 font-bold">Upload Resume</p>
                <p className="m-1">Upload your resume in PDF format securely</p>
                </div>
            </div >
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </div>
            <div className="h-28 w-80 flex justify-center rounded-lg p-4 gap-1  ">
                <button className="border bg-green-400 rounded-full h-6 w-12 text-white font-bold">2</button>
                <div className= "bg-[url('https://imgs.search.brave.com/I8KZIF1Z34Q4BeJPHAkx_opIsjJfEtcoFP0vX_j05U8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTcv/MDc2LzQ0NS9zbWFs/bC9pbnRlcmFjdGl2/ZS1icmFpbi1pY29u/LWZvci1sZWFybmlu/Zy12ZWN0b3IuanBn')]  w-28 h-28 bg-contain bg-no-repeat rounded-full"></div>
                <div>
                <p className=" m-1 font-bold">AI Analyzes Skills</p>
                <p className="m-1">AI Analyzes your skills, experience and strengths</p>
                </div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </div>
            <div className="h-28 w-80 flex justify-center rounded-lg p-4 gap-1   ">
                 <button className="border bg-green-400  h-6 w-12 rounded-full text-white font-bold">3</button>
                <img src={goal} className="h-14 w-14 rounded-full"/>
                <div>
                 <p className=" m-1 font-bold ">Get Job Matches</p>
                 <p className="m-1">Get matched with the best job opportunities for you</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Howitworks