import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const Body = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const userData = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispath(addUser(userData.data));
    } catch (err) {
      if (err.status == 401) {
        navigate("/login");
      }
      console.log("Login");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
