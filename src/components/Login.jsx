import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("anil@gmail.com");
  const [password, setPassword] = useState("Anil@123");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginClick = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      //   console.log(res);
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong while logIn");
    }
  };
  return (
    <div className="card bg-base-300 w-96 shadow-sm my-10 mx-auto">
      <div className="card-body">
        <h2 className="card-title justify-center">Login</h2>
        <div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email ID</legend>
            <input
              type="text"
              className="input"
              value={emailId}
              placeholder="Email"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="text"
              className="input"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
        </div>
        <p className="text-red-800 font-medium text-xs">{error}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
