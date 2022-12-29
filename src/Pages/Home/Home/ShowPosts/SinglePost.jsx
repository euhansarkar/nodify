import React from "react";

const SinglePost = ({post}) => {
    const {img} = post;
  return (
    <div className="card card-compact my-4 w-full bg-slate-700">
      <figure>
        <img src={img} alt="Shoes" className="h-1/3 w-full object-contain" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;