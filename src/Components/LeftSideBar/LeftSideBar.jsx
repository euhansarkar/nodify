import React from "react";
import { BsPlus, BsStar, BsCalendar4Event, BsGrid, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo, FaBirthdayCake, FaPowerOff } from "react-icons/fa";
import {FiFile, FiHeadphones} from "react-icons/fi"
import {BiStar} from "react-icons/bi"
import {AiOutlineUsergroupAdd} from "react-icons/ai"
import {TiWeatherPartlySunny} from 'react-icons/ti';
import {CgGames} from 'react-icons/cg';
const LeftSideBar = () => {
  return (
    <div
      className="fixed top-20 rounded-lg left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
    >
      <SideBarIcon icon={<BsGrid size="32" />} />
      <Divider />
      <SideBarIcon icon={<FiFile size="22" />} />
      <SideBarIcon icon={<BiStar size="22" />} />
      <SideBarIcon icon={<AiOutlineUsergroupAdd size="22" />} />
      <SideBarIcon icon={<FiHeadphones size="22" />} />
      <SideBarIcon icon={<TiWeatherPartlySunny size="22" />} />
      <SideBarIcon icon={<BsCalendar4Event size="22" />} />
      <SideBarIcon icon={<FaBirthdayCake size="22" />} />
      <SideBarIcon icon={<CgGames size="22" />} />
      <Divider />
      <SideBarIcon icon={<FaPowerOff size="22" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = `tooltip` }) => (
  <div className="sidebar-icon group text-white group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-1">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default LeftSideBar;
