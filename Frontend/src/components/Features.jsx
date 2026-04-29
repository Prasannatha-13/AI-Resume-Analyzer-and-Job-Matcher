import React from "react";
import resume from "/resume.png"
import job from "/job.png"
import skill from "/skill.png"
import growth from "/growth.png"


function Features(){
    return(
        <>
        <h1 className="text-3xl font-bold text-center m-10 mb-7">Features</h1>
        <div className="flex justify-center gap-10">
         <div className="h-46 w-64 border p-4 rounded-xl shadow-2xl shadow-blue-500/100">
                 <div className="flex justify-center"><img src={resume} className="h-14 w-14 "/></div>
                 <p className="text-center m-2 font-bold">Resume Analysis</p>
                 <p className="text-center">Get a detailed analysis and score to improve your resume</p>
        </div>
        <div className="h-46 w-64 border  p-4 rounded-xl shadow-2xl shadow-blue-500/100">
                 <div className="flex justify-center"><img src={job} className="h-14 w-14"/></div>
                 <p className="text-center m-2 font-bold">Job Matching</p>
                 <p className="text-center">Find jobs that best match your skills and experience</p>
        </div>
         <div className="h-46 w-64 border p-4 rounded-xl shadow-2xl shadow-blue-500/100">
                 <div className="flex justify-center"><img src={skill} className="h-14 w-14"/></div>
                 <p className="text-center m-2 font-bold">Skill Insights</p>
                 <p className="text-center">Discover your top skills and learn new skills according to your job</p>
        </div>
         <div className="h-46 w-64 border  p-4 rounded-xl shadow-2xl shadow-blue-500/100">
                 <div className="flex justify-center"><img src={growth} className="h-14 w-14"/></div>
                 <p className="text-center m-2 font-bold">Career Growth</p>
                 <p className="text-center">Personalized recommendations for your carrer growth and perfect job </p>
        </div>
        </div>
        </>
    )
}
export default Features