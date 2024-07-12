import React from "react";
import { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

function Header({ handleChange, handleSearch }) {
  return (
    <header className="flex md:justify-between md:items-center md:flex-row md:mx-10 mx-5 md:mt-5 md:mr-15 flex-col justify-center gap-4">
      <h1 className="text-[#C4C2C2] font-poppins font-semibold md:text-5xl text-3xl m-3 ">
        <Link to={'/'}>Github Insight</Link>
      </h1>
      <div className="flex md:gap-5 gap-3 md:h-[50%] h-[30%]">
        <input
          className="bg-[#9595953c] md:min-w-[40vw] min-w-[75%] md:min-h-[60px] min-h-[5vh] px-5 searchInput rounded-[20px] border-[#AEAEAE] border-2 text-white duration-100 hover:bg-[#d7d7d73c]"
          type="text"
          placeholder="Search a github username"
          onChange={handleChange}
        />

        {/* button for big screens */}
        <button
          onClick={handleSearch}
          className="text-[#CDCDCD] border-2 border-[#2C8497] rounded-[20px] px-6 bg-[#9595953c] shadow-md shadow-[#2C8497] hover:bg-[#d7d7d73c] active:bg-[#8e8e8e3c] relative active:top-1 left-1 md:block hidden"
        >
          search
        </button>
        {/* button for mobile screens */}
        <button onClick={handleSearch} 
        className="md:hidden block text-white bg-[#9595953c] px-4 rounded-[20px] border-[#2C8497] border-2 shadow-[#2C8497] ">
          <Search size={28} />
        </button>

      </div>
    </header>
  );
}

export default Header;
