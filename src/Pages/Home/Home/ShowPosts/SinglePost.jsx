import React, { useEffect, useState } from "react";
import { BiLike } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";
import axios from "axios";
const SinglePost = ({ post }) => {
  const { _id, img, message } = post;
  const [comments, setComments] = useState([]);
  const handleCommentsForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;

    const data = {
      postId: _id,
      comments: comment,
    };


    fetch(`http://localhost:5000/comments`, {
      method: `POST`,
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
          console.log(`comment added`);
        }
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/comments/${_id}`)
      .then((data) => setComments(data));
  }, [_id]);

  console.log(comments.data);

  return (
    <div className="card card-compact my-4 p-3 w-full bg-slate-700">
      <figure>
        <img src={img} alt="Shoes" className="h-1/3 w-full object-contain" />
      </figure>
      <h2 className="card-title">{message}</h2>
      <div className="divider mt-0"></div>
      <div className="flex items-center mx-8 mt-0 justify-between">
        <div className="flex gap-3">
          <BiLike className="text-2xl" />
          <p>3k</p>
        </div>
        <div className="flex gap-3">
          <FaRegCommentAlt className="text-2xl" />
          <p>2k</p>
        </div>
        <div className="flex gap-3">
          <BiShareAlt className="text-2xl" />
          <p>1k</p>
        </div>
      </div>
      <div className="my-4 mx-5">
        <form onSubmit={handleCommentsForm}>
          <input
            type="text"
            name="comment"
            className="input w-full input-bordered"
            placeholder="add your comment"
          />
          <input type="submit" value="" />
        </form>
        <div className="flex flex-col">
          {
            comments?.data?.map(comment => <p>{comment?.comments}</p> )
          }
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
