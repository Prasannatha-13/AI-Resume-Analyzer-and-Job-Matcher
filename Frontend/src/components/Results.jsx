import React from 'react'
import check from '/check.png'

function Results (){
    return(
      <>
      <h1 className='text-3xl text-center font-bold items-center m-14 mb-4 '>Smart Analysis<br/> Better Oppurtunities</h1>

      <p className='text-center mt-6'>Our AI goes beyond keywords to understand your potential and connects you with the right job opportunities</p>
      <div className='flex justify-center gap-6 m-3 mb-10 bg-green-50 '>
      <div className='flex items-center'><img src={check} className='h-6 w-6'/><p className='m-1'>Improve your resume</p> </div>
      <div className='flex items-center'><img src={check} className='h-6 w-6'/><p className='m-1'>get personalized feedback</p></div>
      <div className='flex items-center'><img src={check} className='h-6 w-6'/><p className='m-1'> Match with top companies</p></div>
      </div>
      </>
    )
}
export default Results