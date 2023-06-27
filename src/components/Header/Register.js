import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <button className="register__button">
        <Link to="/register">Зарегистрироваться</Link>
      </button>
      <div className="register__divider"></div>
      <button className="register__enter-button">
        <Link to="/Authorization">Войти</Link>
      </button>
    </div>
  );
}

export default Register;
