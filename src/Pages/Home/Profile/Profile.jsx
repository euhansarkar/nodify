import React from "react";

const Profile = () => {
  return (
    <div className="card w-full rounded-md text-gray-800 bg-gray-300">
      <figure className="px-8 pt-6">
        <div className="avatar">
          <div className="w-24 mx-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <div className="flex flex-col items-center">
          <h2 className="card-title capitalize">euhan sarkar</h2>
          <p>euhansarkar@gmail.com</p>
        </div>
        <p>
          If a dog chews shoes whose shoes does he choose?Lorem Ipsum is simply
          dummy text of the printing and typesetting industry.
        </p>
      </div>
      <div className="flex justify-between gap-10 items-center mx-auto">
        <h3 className="text-center font-bold">
          20 <br /> following
        </h3>
        <h3 className="font-bold text-center">
          434524 <br /> likes
        </h3>
        <h3 className="font-bold text-center">
          20 <br /> follower
        </h3>
      </div>
      <div className="card-actions items-center flex justify-center">
        <button className="btn mb-8 mt-4  btn-primary">view profile</button>
      </div>
    </div>
  );
};

export default Profile;
