import React from "react";
import { Link } from "react-router-dom";

function App() {

  return (
    <div className="text-white w-[100vw] h-[100vh] flex justify-center items-center flex-col relative top-[-30px]">

        <div className="flex justify-center items-center flex-col">
            <h1 className="capitalize md:text-9xl text-5xl font-robotoMono stroke">github insight</h1>
            <p className="font-firaSans md:text-4xl text-xl text-[#ABABAB]">Explore GitHub Profiles with Ease</p>
        </div>

        <div className="mt-20 flex items-center">
            <Link to={'/explore'} className="md:text-5xl text-2xl text-[#E5E1E1] font-sourceSans border-[#8F8D8D] border-2 md:px-32 px-20 py-3 rounded-xl hover:bg-[#8F8D8D] hover:text-black transition-all active:bg-[#bcbcbc]">explore</Link>
        </div>

    </div>
  );
}

export default App;
