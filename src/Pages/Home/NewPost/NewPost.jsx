import React from "react";
import { useForm } from "react-hook-form";
import {FaVideo} from 'react-icons/fa';
import {IoMdPhotos} from "react-icons/io"
import {BsEmojiSmile} from 'react-icons/bs'
const NewPost = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="bg-gray-200 rounded-md p-5">
      <form className="flex items-center justify-center flex-col">
        <div className="container flex items-center space-x-3 mx-3">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="form-control w-full">
            <input
              {...register("firstName")}
              type="text"
              placeholder="what's on your mind! euhan?"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex items-center justify-evenly w-full">
            <FaVideo className="text-3xl text-red-700" />
            <IoMdPhotos className="text-3xl text-green-700" />
            <BsEmojiSmile className="text-3xl text-amber-400" />
        </div>
      </form>
    </div>
  );
};

export default NewPost;
