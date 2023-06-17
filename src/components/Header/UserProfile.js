import React from "react";
import "./Header.css";
import avatar from "./../../images/avatar.svg";

function UserProfile() {
  return (
    <div className="user-profile">
      <div className="user-info">
        <p className="user-info__name">User U.</p>
        <button className="log-out_btn">Выйти</button>
      </div>
      <div className="avatar">
        <img className="avatar" src={avatar} alt="avatar" />
      </div>
    </div>
  );
}

export default UserProfile;
