import React from 'react'

function PreSearch() {
  return (
    <div className='text-white md:w-[70vw] w-[80vw] absolute top-40 flex flex-col gap-6'>

       <div className='flex gap-2 flex-col'>
        <h2 className='md:text-[2.5rem] text-[2rem] font-poppins font-semibold'>What is GitHub Insight?</h2>
        <p className='md:text-[1.2rem] text-[1rem] font-op'>
      GitHub Insight is a sophisticated web application designed for comprehensive GitHub profile analysis. Users can efficiently search for any GitHub username to access detailed information including name, profile picture, bio, repositories, followers, and following. Utilizing the GitHub API for real-time data retrieval
        </p>
        </div>

        <div className='flex gap-2 flex-col'>
        <h3 className='md:text-[2.3rem] text-[1.8rem] font-poppins font-semibold'>
            How to use it?
        </h3>
        <p className='md:text-[1.2rem] text-[1rem] font-op'>
            Enter a Github username on search bar at top right corner and click search.
        </p>

        <ul className='list-disc m-3 md:ml-10 ml-7'>
        <li>It wont work if entered username is not correct.</li>
        </ul>

        </div>

    </div>
  )
}

export default PreSearch
