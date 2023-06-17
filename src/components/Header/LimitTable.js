import React from "react";
import "./Header.css";

function LimitTable() {
  return (
    <div className="limit-table">
      <div className="limit-table__item">
        <p>Использовано компаний</p>
        <p>Лимит по компаниям</p>
      </div>
      <div className="limit-table__values">
        <p className="limit-table__values__used">000</p>
        <p className="limit-table__values__">000</p>
      </div>
    </div>
  );
}

export default LimitTable;
