import React from "react";
import "./Header.css";
import avatar from "./../../images/avatar.svg";
import { useDispatch } from "react-redux";
import { logOut } from "../../features/userSlice";
import { clearData } from "../../features/histogramsSlice";

function UserProfile() {
  const dispatch = useDispatch()
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logOut());
    dispatch(clearData());
    localStorage.clear();
  }

  return (
    <div className="user-profile">
      <div className="user-info">
        <p className="user-info__name">Алексей А.</p>
        <button className="log-out_btn" onClick={(e) => handleLogout(e)}>Выйти</button>
      </div>
      <div className="avatar">
        <img className="avatar" src={avatar} alt="avatar" />
      </div>
    </div>
  );
}

export default UserProfile;
