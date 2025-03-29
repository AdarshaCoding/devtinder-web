import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../store/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
    dispatch(removeUser());
    return navigate("/login");
  };
  return (
    <div className="navbar bg-base-300 shadow-sm py-2">
      {/* Reduced padding */}
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          DevTinder
        </Link>
      </div>
      <div className="flex gap-2">
        {user && (
          <div className="flex items-center">
            <p className="font-bold, font-mono text-sm">
              Welcome, {user.firstName}
            </p>
            <div className="dropdown dropdown-end mx-5">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-5 rounded-full">
                  <img src={user.photoUrl} alt="User Photo" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to={"/profile"} className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <Link onClick={handleLogOut}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
