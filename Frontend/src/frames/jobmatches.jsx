import React from "react";
import { useState } from "react";

function Jobmatch({ results }) {
  
  const jobMatch = results?.jobmatch;
  const jobs = results?.jobmatches || [];

  return (
    <div className="p-4 bg-blue-300 bg-opacity-15 ">

      <div className="mb-6 border p-4 rounded-lg bg-blue-300 bg-opacity-15">
        <h2 className="text-2xl font-bold mb-2">🔥Your Job Match</h2>
        <p className="text-xl font-semibold text-green-500">
          Match: {jobMatch?.matchpercentage || 0}%
        </p>
        <p className="mt-2 text-gray-600">
          {jobMatch ? (jobMatch?.summary || "No summary Available"):("Job Description is empty") }
         
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold"> ✅ Matched Skills</h3>
        <ul className="list-disc pl-6 marker:text-green-500">
          {jobMatch?.matchedskills?.map((skill, i) => (
            <li className=" marker:text-green-500" key={i}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold"> ❌ Missing Skills</h3>
        <ul className="list-disc pl-6 marker:text-red-500">
          {jobMatch?.missingskills?.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>

      
      <div className="border rounded-lg">
        <h2 className="text-2xl font-bold mb-4 p-3 pb-1">🚀 Top Matched Jobs</h2>

        {jobs.length === 0 && (
          <p className="text-gray-500">No jobs found</p>
        )}

        {jobs.map((job, i) => (
          <div
            key={i}
            className=" p-4  mb-3 flex justify-between items-center bg-blue-300 bg-opacity-10"
          >
            <div>
              <h3 className="text-lg font-bold">
                {job.jobtitle}
              </h3>
              <p className="text-gray-600">
                {job.company}
              </p>
            </div>

            <div className="text-right">
              <p className="font-bold text-green-600">
                {job.matchpercentage}%
              </p>
              <p className="text-sm text-green-500">Match</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Jobmatch;