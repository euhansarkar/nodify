import React from "react";
import { IoIosImages } from "react-icons/io";
import { FaUserTag } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const PostModal = () => {
  const handleSubmitModal = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form);
  };

  return (
    <div>
      <input type="checkbox" id="postModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="postModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Create Post</h3>
          <form onClick={handleSubmitModal}>
            <input
              type="text"
              placeholder="what's happanning ?"
              className="input my-5 input-ghost w-full focus:outline-none"
            />
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
            />
            <div className="flex items-center justify-between border p-1 rounded-lg w-full">
              <div>
                <span>add to your post</span>
              </div>
              <div className="flex items-center justify-evenly gap-2">
                <div className="tooltip" data-tip="photo">
                  <IoIosImages className="text-2xl text-green-500 w-8 p-1 h-8 rounded-full bg-gray-700" />
                </div>
                <div className="tooltip" data-tip="tag a friend">
                  <FaUserTag className="text-2xl text-green-500 w-8 p-1 h-8 rounded-full bg-gray-700" />
                </div>
                <div className="tooltip" data-tip="filling/activity">
                  <BsEmojiSmile className="text-2xl text-green-500 w-8 p-1 h-8 rounded-full bg-gray-700" />
                </div>
                <div className="tooltip" data-tip="location">
                  <IoLocationOutline className="text-2xl text-green-500 w-8 p-1 h-8 rounded-full bg-gray-700" />
                </div>
              </div>
            </div>
            <button className="btn btn-outline btn-error w-full btn-md text-white my-3">
              post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
