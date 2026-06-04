import React from "react";
import ResumeAnalysis from "./resumeAnalysis";
import Jobmatch from "./jobmatches";
import resumeimg from "/blurred_resume.png"

function Overview({results,setresuls,info,setinfo}){
   

    
     const jobs = results?.jobmatches || [];
    return(
    <>
    
     <div className="h-screen w-full ">
                 <div className="border h-[74px] text-4xl font-bold pl-7 p-2">Dashboard</div>
                 <div className="p-6 gap-0">
                 <div className="flex h-[365px] w-full gap-4 p-2 mb-0">
                     <div className="border h-[360px] w-[790px] rounded-lg overflow-auto custom-scroll no-scrollbar shadow-md "><ResumeAnalysis results={results}/></div>
                     <div className=" h-[350px] w-3/12 rounded-lg shadow-md flex flex-col justify-center items-center mt-0 ">
                     <img src={resumeimg} alt="Resume" className="rounded-lg"/>
                     <button
                         onClick={() => {
                          if (info?.resume) {
                           window.open(`http://localhost:3000/uploads/${info.resume}`,"_blank");
                           }
                            }}
                          className="border-2 border-blue-500 w-[232px] text-lg text-blue-600 px-4 py-2 rounded-lg ">  View Resume</button>
                     </div>
                 </div>
                
                <div className="border h-auto rounded-lg mt-7 shadow-xl">
        <h2 className="text-2xl font-bold mb-4 p-3 pb-1">🚀 Top Matched Jobs</h2>

        {jobs.length === 0 && (
          <p className="text-gray-500">No jobs found</p>
        )}

        {jobs.map((job, i) => (
          <div
            key={i}
            className=" p-4 mb-3 flex justify-between items-center bg-blue-300 bg-opacity-10"
          >
            <div>
              <h3 className="text-lg font-bold">
                {job?.jobtitle}
              </h3>
              <p className="text-gray-600">
                {job?.company}
              </p>
            </div>

            <div className="text-right">
              <p className="font-bold text-green-600">
                {job?.matchpercentage}%
              </p>
              <p className="text-sm text-green-500">Match</p>
            </div>
          </div>
        ))}
      </div>

                 </div>
            </div>
    </>
    )
}
export default Overview