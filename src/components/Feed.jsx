import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const fetchFeed = async () => {
    if (feed) return;
    const res = await axios.get(BASE_URL + "/user/feed", {
      withCredentials: true,
    });
    dispatch(addFeed(res.data));
  };

  useEffect(() => {
    fetchFeed();
  }, []);
  return (
    feed && (
      <div className="">
        {/* {feed.map((item) => (
          <UserCard key={item._id} user={item} />
        ))} */}
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
