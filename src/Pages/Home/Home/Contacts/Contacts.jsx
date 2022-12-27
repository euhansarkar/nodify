import React from "react";
import { RiVideoAddFill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
const Contacts = () => {
  return (
    <div>
      <div className="flex w-full bg-gray-300 items-center justify-between">
        <h2 className="text-2xl text-black">contacts</h2>
        <div className="flex gap-4">
          <RiVideoAddFill className="text-2xl" />
          <BsSearch className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
