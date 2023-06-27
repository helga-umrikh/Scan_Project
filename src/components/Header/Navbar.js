import React from "react";
import './Header.css'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar__button" exact>Главная</Link>
      <Link to="/tariff" className="navbar__button" exact>Тарифы</Link>
      <Link to="/FAQ" className="navbar__button" exact>FAQ</Link>
    </div>
  );
}

export default Navbar;
