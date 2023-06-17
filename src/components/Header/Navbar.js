import React from "react";
import './Header.css'

function Navbar() {
  return (
    <div className="navbar">
      <a href="/" className="navbar__button" exact>Главная</a>
      <a href="/tariff" className="navbar__button" exact>Тарифы</a>
      <a href="/FAQ" className="navbar__button" exact>FAQ</a>
    </div>
  );
}

export default Navbar;
