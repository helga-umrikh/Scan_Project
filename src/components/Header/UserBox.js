import React, { Suspense } from "react";
import UserProfile from "./UserProfile";
import Loader from 'react-js-loader';

const LimitTable = React.lazy(() => delayForDemo(import("./LimitTable")));

function UserBox() {
  return (
    <div className="user-box">
      <Suspense
        fallback={
          <div className="limit-table_loading">
            <Loader
              type="spinner-circle"
              bgColor={"#FFFFFF"}
              title={"spinner-circle"}
              size={50}
              className="limit-table__loader-icon"
            />
          </div>
        }
      >
        <LimitTable />
      </Suspense>
      <UserProfile />
    </div>
  );
}

const delayForDemo = async (promise) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
};

export default UserBox;
