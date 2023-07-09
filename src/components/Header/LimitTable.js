import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function LimitTable() {
  //упрости этот код
  const user = useSelector(selectUser);
  const userInf = user.userInfo;

  return (
    <div className="limit-table">
      <div className="limit-table__item">
        <p>Использовано компаний</p>
        <p>Лимит по компаниям</p>
      </div>
      <div className="limit-table__values">
      <p className="limit-table__values_used">{userInf.usedCompanyCount}</p>
        <p className="limit-table__values_limit">{userInf.companyLimit}</p>
      </div>
    </div>
  );
}

export default LimitTable;
