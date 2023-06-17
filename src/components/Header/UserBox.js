import React from "react";
import LimitTable from "./LimitTable";
import UserProfile from "./UserProfile";

function UserBox() {
  return (
    <div className="user-box">
      <LimitTable />
      <UserProfile />
    </div>
  );
}

export default UserBox;
