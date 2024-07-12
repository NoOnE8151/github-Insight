import React from "react";
import { useState } from "react";
import axios from "axios";
import Header from "./explore page/header";
import Profile from "./explore page/profile";
import RepoList from "./explore page/repoList";
import Loading from "./explore page/loading";
import PreSearch from "./explore page/preSearch";

function Explore() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repoList, setRepoList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(res.data);
      const repoRes = await axios.get(`https://api.github.com/users/${username}/repos`);
      setRepoList(repoRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("user not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header handleChange={handleChange} handleSearch={handleSearch} />
      <main className="w-[100%] h-[90vh] flex md:flex-row flex-col md:justify-center items-center gap-16 mt-10">
        {loading ? (
          <Loading />
        ) : userData ? (
          <>
            <Profile userData={userData} />
            <RepoList userData={userData} repoList={repoList} />
          </>
        ) : (
          <PreSearch />
        )}
      </main>
      <footer className="text-white flex justify-center my-5">
        &copy; codeConquests | 2024
      </footer>
    </div>
  );
}

export default Explore;
