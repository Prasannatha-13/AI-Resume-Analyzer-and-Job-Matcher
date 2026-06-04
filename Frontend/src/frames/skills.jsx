import React from "react";

function Skills({results}){
    return(
    <>
    <div className="flex flex-col items-center bg-blue-300 bg-opacity-10 h-screen w-full">
        <h1 className="text-4xl font-semibold m-10 ml-0">Skills</h1>
        <ul className="list-disc">
            {results?.skills?.map((skills,index)=> <li className="mb-[9px] font-serif text-xl marker:text-green-600 " key={index}>{skills}</li>)}
        </ul>
    </div>
    </>
    )
}
export default Skills