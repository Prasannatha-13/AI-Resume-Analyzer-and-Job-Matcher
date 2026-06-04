import React from "react";

function ResumeAnalysis({ results }) {


  return (
    <div className="flex justify-center bg-opacity-10  h-full items-center">
  <div className="flex flex-col ">
    <p className="text-3xl font-bold pl-7">Resume Score</p>

    <div className="relative flex items-center justify-center h-56 w-56 pl-7 pt-5">

    <svg className="absolute" width="220" height="220">
       <defs>
         <linearGradient id="gradientColor" x1="0%" y1="0%" x2="100%" y2="0%">
           <stop offset="0%" stopColor="#3b82f6" />
           
           <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
        </defs>

      <circle
        cx="110"
        cy="110"
        r="90"
        stroke="#e5e7eb"
        strokeWidth="20"
        fill="none"
      />

      <circle
        cx="110"
        cy="110"
        r="90"
        stroke="url(#gradientColor)"
        strokeWidth="20"
        fill="none"
        strokeLinecap=""
        strokeDasharray={2 * Math.PI * 90}
        strokeDashoffset={
          2 * Math.PI * 90 * (1 - (results?.score || 0) / 100)
        }
        transform="rotate(-90 110 110)"
        style={{ transition: "0.5s ease" }}
      />
    </svg>

    <div className="text-center">
      <p className="text-6xl font-bold">{results?.score}</p>
      <p className="text-xl">/100</p>
    </div>
 
     </div>
   </div>

   <div className="m-10 mt-24 flex flex-col gap-8">
    <div>
    <h3 className="text-2xl font-bold mb-5">Strengths</h3>
    <ul className="list-disc  pl-6 ">
      {results?.strengths?.map((s, i) => <li className="mb-[9px] font-serif text-xl marker:text-green-600" key={i}>{s}</li>)}
    </ul>
    </div>
    <div>
     <h3 className="text-2xl font-bold mb-7">Improvements</h3>
    <ul className="list-disc  pl-6">
      {results?.suggestions?.map((s, i) => <li className="mb-[9px] font-serif text-xl marker:text-green-600" key={i}>{s}</li>)}
    </ul>
     </div>
    </div>
    </div>

 )}   

export default ResumeAnalysis
