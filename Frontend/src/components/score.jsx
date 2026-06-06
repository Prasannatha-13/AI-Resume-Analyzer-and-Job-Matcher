import React, { useState } from "react";
import { NavLink ,Outlet} from "react-router-dom";
import { Routes,Route} from 'react-router-dom';
import AI from "/realAi.png"



function Score({file,description,results}){
    
   
     return(
        <>
        <div className="flex border h-screen w-full overflow-hidden  ">
            <div className="border w-[260px] flex flex-col gap-10 pt-10 pl-3 pb-0 bg-blue-400 bg-opacity-15 bg-blend-multiply">
                
                <NavLink
                   to="overview"
                      className={({ isActive }) =>
                       `p-2 rounded-md ${
                           isActive
                   ? "bg-green-100 border-l-4 border-green-500 text-green-700 font-semibold"
                 : " text-xl font-semibold hover:bg-blue-100"
                    }`
                   }>
                    <div className="flex gap-3">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
                 </svg>
                  <p>Overview</p>
                     </div>
                   
                </NavLink>
                <NavLink
                   to="resumeanalysis"
                      className={({ isActive }) =>
                       `p-2 rounded-md ${
                           isActive
                   ? "bg-green-100 border-l-4 border-green-500 text-green-700 font-semibold"
                 :  "text-xl font-semibold hover:bg-blue-100"
                    }`
                   }>
                     <div className="flex gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>

                       <p> Resume Analysis</p> 
                     </div>
                  
                </NavLink>
                <NavLink
                   to="jobmatches"
                      className={({ isActive }) =>
                       `p-2 rounded-md ${
                           isActive
                   ? "bg-green-100 border-l-4 border-green-500 text-green-700 font-semibold"
                  : "  text-xl font-semibold hover:bg-blue-100"
                    }`
                   }>
                     <div className="flex gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                       </svg>

                        <p>Job Matches</p></div>
                   
                </NavLink>
                
                <NavLink
                   to="skills"
                      className={({ isActive }) =>
                       `p-2 rounded-md ${
                           isActive
                   ? "bg-green-100 border-l-4 border-green-500 text-green-700 font-semibold"
                 : "  text-xl font-semibold hover:bg-blue-100"
                    }`
                   }>
                  <div className="flex gap-3">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                     </svg>
                     <p> Skills</p>
                     </div>
                  
                    </NavLink>
                <NavLink
                   to="profile"
                      className={({ isActive }) =>
                       `p-2 pb-0 mb-0 rounded-md ${
                           isActive
                   ? "bg-green-100 border-l-4 border-green-500 text-green-700 font-semibold"
                 : " text-xl font-semibold hover:bg-blue-100"
                    }`
                   }>
                  <div className="flex gap-3 justify-start p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                    </svg>
                    <p>Profile</p>
                  </div>
                    </NavLink>
                  
                    <img src={AI} className="mt-0 mb-2"/>
            </div>
           <div className=" border w-[80%] overflow-y-auto scroll-smooth custom-scroll no-scrollbar"><Outlet/></div>
           <div className="flex items-center"><img src={AI} className="h-[330px] w-64 ml-0"/></div>
        </div>
        
  
        </>
     )
}
export default Score