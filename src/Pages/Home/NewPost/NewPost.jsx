import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaVideo } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import PostModal from "../PostModal/PostModal";
import { IoIosImages } from "react-icons/io";
import { FaUserTag } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Components/Contexts/AuthProvider/AuthProvider";
import "./NewPost";

const NewPost = () => {
  const { user } = useContext(AuthContext);

  const { handleSubmit, register } = useForm();
  const imageUploadKey = '8fab73a19983cf600537a30569d42841';


  const handlePost = (data) => {
    const { post, img } = data;
    console.log(post, img);

    const formData = new FormData();
    formData.append(`image`, img[0]);
    fetch(`https://api.imgbb.com/1/upload?key=${imageUploadKey}`, {
      method: `POST`,
      body: formData,
    })
    .then(res => res.json())
    .then(imgData => {
      if(imgData.success){
        console.log(imgData.data.url);
        const uploadedImage = imgData.data.url;
        
        const newPost = {
          poster: user?.email,
          message: post,
          img: uploadedImage,
          posted_time: new Date(),
        }

        fetch(`http://localhost:5000/posts`, {
          method: `POST`,
          headers: {
            "Content-Type": `application/json`,
          },
          body: JSON.stringify(newPost)
        })
        .then(res => res.json())
        .then(postData => {
          console.log(postData);
        })


      }
    })
  };

  return (
    <div className="bg-gray-200 rounded-md p-5">
      <form onSubmit={handleSubmit(handlePost)}>
        <div className="container flex items-center space-x-3 mx-3">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src="https://placeimg.com/192/192/people" alt="" />
            </div>
          </div>
          <input
            type="text"
            {...register(`post`)}
            placeholder={`what's on your mind ?`}
            className="input input-ghost w-full focus:outline-none"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex pl-24 items-center justify-between border p-1 rounded-lg w-full">
            <div className="flex items-center justify-evenly gap-2">
              <div className="tooltip" data-tip="photo">
                <label htmlFor="addImg">
                  <IoIosImages className="text-2xl text-green-500 w-8 p-1 h-8 rounded-full bg-gray-700"></IoIosImages>
                </label>
                <input
                  type="file"
                  {...register("img")}
                  style={{ display: "none", visibility: "hidden" }}
                  accept=""
                  id="addImg"
                />
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
            <div>
              <button className="btn btn-outline btn-error  btn-sm text-white my-3">
                post
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
