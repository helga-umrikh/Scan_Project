import React from "react";
import './Header.css';

function Register() {
  return (
    <div className="register">
      <button className="register__button">Зарегистрироваться</button>
      <div className="register__divider"></div>
      <button className="register__enter-button">Войти</button>
    </div>
  );
}

export default Register;
