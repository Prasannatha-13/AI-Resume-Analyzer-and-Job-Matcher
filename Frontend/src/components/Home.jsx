import React from 'react'

function Home(){
    return(
       
 <div className="bg-[url('/project.png')] h-screen bg-cover bg-center bg-no-repeat bg-blend-multiply">
    <h1 className='leading-tight text-6xl font-semibold [word-spacing:-5px] px-16 pl-10 pt-16 pb-6 '>Analyze Your <span className='text-blue-500'>Resume.</span><br></br>
    Get Matched To<br></br>Your <span className='bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent'>Dream Job.</span></h1>
    <p className='text-2xl font-sans px-16 py-0'>AI-Powered insights to improve your<br/> resume and find the right oppurtunities</p>
    <div className='flex gap-6'>
        <button className='bg-blue-500 flex gap-2 ml-14 mt-10 py-3 p-6 border rounded-lg font-serif text-white text-xl  hover:scale-110 hover:bg-green-600  transition duration-700 ease-in-out cursor-pointer hover:ring-4 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
            </svg>Upload Resume</button>
        <button className=" text-xl mt-10 py-3 p-6 rounded-lg hover:curser-pointer  relative overflow-hidden border border-blue-500 bg-white px-6 font-semibold group">
        <span className="absolute top-0 right-0 h-full w-0 bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
        <span className="relative z-10 text-blue-500 group-hover:text-white transition-colors duration-300">
        Get Started
       </span>

</button>
    </div>
  </div>

    )
}

export default Home