import React from "react";
import "./Authorization.css";
import characters from "./../../images/Characters.svg";
import SignIn2 from "./SignIn2";

function Authorization() {
  return (
    <div className="auth">
      <div className="auth__box">
        <p className="auth__title">Для оформления подписки на тариф, необходимо авторизоваться.</p>
        <div className="characters">
          <img src={characters} alt="characters"></img>
        </div>
      </div>
      <SignIn2 />
      <p className="auth__title_mobile">Для оформления подписки на тариф, необходимо авторизоваться.</p>
    </div>
  );
}

export default Authorization;
