import React from "react";
import { useForm } from "react-hook-form";
import { FaVideo } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import PostModal from "../PostModal/PostModal";
const NewPost = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="bg-gray-200 rounded-md p-5">
      <form className="flex items-center justify-center flex-col">
        <div className="container flex items-center space-x-3 mx-3">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src="https://placeimg.com/192/192/people" alt="" />
            </div>
          </div>
          <label htmlFor="postModal" className="input input-bordered w-full ">
            what's on your mind euhan ?
          </label>
        </div>
        <div className="flex items-center justify-evenly w-full">
          <label htmlFor="postModal">
            <FaVideo className="text-3xl text-red-700" />
          </label>
          <label htmlFor="postModal">
            <IoMdPhotos className="text-3xl text-green-700" />
          </label>
          <label htmlFor="postModal">
            <BsEmojiSmile className="text-3xl text-amber-400"></BsEmojiSmile>
          </label>
        </div>
        <PostModal />
      </form>
    </div>
  );
};

export default NewPost;
