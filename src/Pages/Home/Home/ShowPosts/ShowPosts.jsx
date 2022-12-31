import axios from "axios";
import React, { useEffect, useState } from "react";
import SinglePost from "./SinglePost";

const ShowPosts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/posts`)
      .then((mi) => setData(mi))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // console.log(data?.data?.map(da => console.log(da)));

  return (
    <div>
      <div>
        {data?.data?.map((post) => (
          <SinglePost post={post} key={post._id}></SinglePost>
        ))}
      </div>
    </div>
  );
};

export default ShowPosts;
