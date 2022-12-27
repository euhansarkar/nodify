import React from "react";
import LeftSideBar from "../../../Components/LeftSideBar/LeftSideBar";
import RightSideBar from "../../../Components/RightSideBar/RightSideBar";
import Profile from "../Profile/Profile";
import NewPost from "../NewPost/NewPost";
import Events from "../Events/Events";
import SideBar from "./SideBar/SideBar";
import SideBar2 from "./SideBar2/SideBar2";

const Home = () => {
  return (
    // <div>
    //   {/* <SideBar /> */}

    // </div>
    <div className="flex">
      <LeftSideBar />
      <div className="container gap-3 grid grid-cols-12 w-[1200px] mx-auto my-3">
        <div className="col-span-3">
          <Profile />
        </div>
        <div className="col-span-6">

        <NewPost />
        </div>
        <Events />
      </div>
      <RightSideBar />
     </div>
  );
};

export default Home;
