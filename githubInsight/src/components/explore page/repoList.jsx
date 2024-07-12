import React from 'react';
import { BookMarked } from "lucide-react";

function RepoList({ userData, repoList }) {
  return (
    <section className="bg-[#99999933] text-white md:h-[87%] h-[50%] md:w-[50%] w-[80%] rounded-sm flex flex-col font-poppins">
        <div className='flex md:text-3xl text-lg items-center bg-[#030010db] p-4'><BookMarked size={36} className='mr-5 md:block hidden' /> <BookMarked size={28} className='mr-3 md:hidden block' /> <span>{userData.login}</span>'s repositories - <span>{userData.public_repos}</span></div>

        <div className='md:m-5 m-2 overflow-auto scrollbarHide flex flex-col gap-3'>

    {repoList.map((repo) => {
      return (
        <div key={repo.id} className='bg-[#030010db] md:p-8 p-7 rounded-lg flex gap-5 items-center overflow-y-hidden overflow-x-auto scrollbar whitespace-nowrap '>
            <img src={userData.avatar_url} alt="avatar" className='rounded-full md:w-50px w-[30px]' />
            <div className='md:text-xl text-md flex gap-5'>
                <span>{repo.name}</span> <span>-</span> <span><a href={repo.html_url} target='blank_' className='underline text-[#1786c2]'>{repo.full_name}</a></span>
            </div>
            </div>
      )
    })}
      

        </div>
    </section>
  )
}

export default RepoList;
