import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUserAdd, AiFillHome } from "react-icons/ai";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { SiFacebookgaming } from "react-icons/si";
import {
  BsFillGrid3X3GapFill,
  BsMessenger,
  BsFillBellFill,
} from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const navBar = (
  <>
    <li className="w-30">
      <div>
        <Link to={`/`}>
          <AiFillHome className="text-3xl font-bold" />
        </Link>
      </div>
    </li>
    <li className="w-30">
      <div>
        <Link to={`/videos`}>
          <MdOutlineVideoLibrary className="text-3xl font-bold" />
        </Link>
      </div>
    </li>
    <li className="w-30">
      <div>
        <Link to={`/marketplace`}>
        <FaStore className="text-3xl font-bold" />
        </Link>
      </div>
    </li>
    <li className="w-30">
      <div>
        <Link to={`/groups`}>
        <HiUserGroup className="text-3xl font-bold" />
        </Link>
      </div>
    </li>
    <li className="w-30">
      <div>
        <Link to={`/gaming`}>
        <SiFacebookgaming className="text-3xl font-bold" />
        </Link>
      </div>
    </li>
  </>
);

// const leftNavBar = (
//   <>
//     <li className="w-30 z-10">
//       <div>
//         <Link to={`/menu`}>
//           <BsFillGrid3X3GapFill className="text-3xl font-bold" />
//         </Link>
//       </div>
//     </li>
//     <li className="w-30">
//       <div>
//         <Link to={`/messages`}>
//           <BsMessenger className="text-3xl font-bold" />
//         </Link>
//       </div>
//     </li>
//     <li className="w-30">
//       <div>
//         <Link to={`/notifications`}>
//           <BsFillBellFill className="text-3xl font-bold" />
//         </Link>
//       </div>
//       <div>
//         <Menu as="div" className="relative inline-block text-left">
//           <div>
//             <Menu.Button className={`flex items-center jusitfy-evenly`}>
//               <div className="avatar">
//                 <div className="w-8 mr-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
//                   <img src={`https://placeimg.com/192/192/people`} alt="" />
//                 </div>
//               </div>
//             </Menu.Button>
//           </div>

//           <Transition
//             as={Fragment}
//             enter="transition ease-out duration-100"
//             enterFrom="transform opacity-0 scale-95"
//             enterTo="transform opacity-100 scale-100"
//             leave="transition ease-in duration-75"
//             leaveFrom="transform opacity-100 scale-100"
//             leaveTo="transform opacity-0 scale-95"
//           >
//             <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//               <div className="py-1">
//                 <Menu.Item>
//                   {({ active }) => (
//                     <Link
//                       to="/signup"
//                       className={classNames(
//                         active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                         "block px-4 py-2 text-sm"
//                       )}
//                     >
//                       signed in as <strong>user</strong>
//                     </Link>
//                   )}
//                 </Menu.Item>
//                 <Menu.Item>
//                   {({ active }) => (
//                     <Link
//                       to="/dashboard"
//                       className={classNames(
//                         active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                         "block px-4 py-2 text-sm"
//                       )}
//                     >
//                       Dashboard
//                     </Link>
//                   )}
//                 </Menu.Item>
//                 <Menu.Item>
//                   {({ active }) => (
//                     <Link
//                       to="/signup"
//                       className={classNames(
//                         active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                         "block px-4 py-2 text-sm"
//                       )}
//                     >
//                       Account Settings
//                     </Link>
//                   )}
//                 </Menu.Item>
//               </div>
//               <div className="py-1">
//                 <Menu.Item>
//                   {({ active }) => (
//                     <Link
//                       to="signup"
//                       className={classNames(
//                         active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                         "block px-4 py-2 text-sm"
//                       )}
//                     >
//                       Support
//                     </Link>
//                   )}
//                 </Menu.Item>
//                 <Menu.Item>
//                   {({ active }) => (
//                     <Link
//                       onClick={userSignOut}
//                       to="/signin"
//                       className={classNames(
//                         active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                         "block px-4 py-2 text-sm"
//                       )}
//                     >
//                       Sign out
//                     </Link>
//                   )}
//                 </Menu.Item>
//               </div>
//               <div className="py-1"></div>
//             </Menu.Items>
//           </Transition>
//         </Menu>
//       </div>
//     </li>
//   </>
// );

const Header = () => {

  const {user, signOutUser} = useContext(AuthContext);

  const userSignOut = () => {
    signOutUser();
  }

  return (
    <div className="navbar w-full h-[71px] bg-sky-400 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navBar}
          </ul>
        </div>
        <div className="flex items-center justify-between gap-4">
          <Link className="btn btn-ghost normal-case text-xl">Nodify</Link>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 w-full">{navBar}</ul>
      </div>
      <div className="lg:hidden block">
        <label
          tabIndex={2}
          htmlFor="SideBarNav"
          className="btn btn-primary drawer-button "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
      <div className="navbar-end hidden pl-48 md:block">
        {
          user?.email ? 
          <ul className="menu menu-horizontal px-1">
            <>
    <li className="w-30 z-10">
      <div>
        <Link to={`/menu`}>
          <BsFillGrid3X3GapFill className="text-3xl font-bold" />
        </Link>
      </div>
    </li>
    <li className="w-30">
      <div>
        <Link to={`/messages`}>
          <BsMessenger className="text-3xl font-bold" />
        </Link>
      </div>
    </li>
    <li className="w-30">
      <div>
        <Link to={`/notifications`}>
          <BsFillBellFill className="text-3xl font-bold" />
        </Link>
      </div>
      <div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className={`flex items-center jusitfy-evenly`}>
              <div className="avatar">
                <div className="w-8 mr-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.email && user?.photoURL} alt="" />
                </div>
              </div>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/signup"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      signed in as <strong>{user?.email && user?.email}</strong>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/dashboard"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Dashboard
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/signup"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Account Settings
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="signup"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Support
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      onClick={userSignOut}
                      to="/signin"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Sign out
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1"></div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </li>
  </>
          </ul> : <Link to={`/signin`}>
            <button className="btn btn-warning">sign in</button>
          </Link>
        }
      </div>
    </div>
  );
};

export default Header;
