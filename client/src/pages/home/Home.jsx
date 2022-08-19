import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Righbar from "../../components/rightbar/Righbar";
import Sidbar from "../../components/sidebar/Sidbar";
import Feed from "../../components/feed/Feed";
import "./home.css";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidbar />
        <Feed />
        <Righbar />
      </div>
    </>
  );
};

export default Home;
