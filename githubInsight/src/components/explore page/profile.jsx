import React from "react";
import { MapPinned, Twitter, Mail } from "lucide-react";

function Profile({ userData }) {
  return (
    <section className="bg-[#99999933] md:h-[87%] md:w-[40%] w-[80vw] rounded-sm md:p-10 p-3 flex flex-col overflow-y-auto scrollbar">
    
      <div className="flex items-center md:gap-10 gap-3">
        <img
          src={userData.avatar_url}
          alt="profile picture of user"
          className="rounded-full border-gray-500 border-2 md:w-[170px] w-[100px]"
        />

        <div className="text-white flex flex-col gap-1">
          <div className="md:text-3xl text-lg font-semibold"><a className="hover:text-[#174ac2f9] transition-all hover:underline" href={userData.html_url} target="balnk_">{userData.name}</a></div>
          <div className="md:text-2xl text-md">{userData.login}</div>
          <div className="text-[#7B7B7B] md:text-lg text-sm"><span className="text-white">Joined:&nbsp;</span>{userData.created_at}</div>
        </div>
      </div>


      <div className="text-white font-semibold md:my-8 my-4 md:text-2xl text-lg">
        {userData.bio === ""
          ? `${userData.login} don't have a bio.`
          : userData.bio}
      </div>

      <div className="text-white bg-[#030010db] flex justify-between md:p-5 p-3 font-semibold text-xl rounded-md">
        <div className="flex flex-col items-center">
          <span className="md:text-2xl text-[1rem]">Repo</span> <span className="md:text-2xl text-[1rem]" >{userData.public_repos}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="md:text-2xl text-[1rem]">Followers</span> <span className="md:text-2xl text-[1rem]">{userData.followers}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="md:text-2xl text-[1rem]">Following</span> <span className="md:text-2xl text-[1rem]">{userData.following}</span>
        </div>
      </div>

      <div className="text-white md:my-9 my-4 flex justify-center mx-5 md:gap-20 gap-10">
        <div className="flex gap-5 md:text-2xl text-md items-center">
          <MapPinned /> <span>{userData.location === null ? "not found" : userData.location}</span>
        </div>
        <div className="flex gap-5 md:text-2xl text-md items-center">
          <Twitter /> <span>{userData.twitter_username === null ? "not found" : userData.twitter_username}</span>
        </div>
      </div>

      <div className="text-white flex gap-5 md:text-2xl text-lg justify-center items-center">
        <Mail /> <span>{userData.email === null ? "email not found" : userData.email}</span>
      </div>
    </section>
  );
}

export default Profile;
