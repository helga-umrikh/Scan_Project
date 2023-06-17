import React from "react";
import "./Authorization.css";
import characters from "./../../images/Characters.svg";
import SignIn from "./SignIn";

function Authorization() {
  return (
    <div className="auth">
      <div className="auth__box">
        <p className="auth__title">Для оформления подписки на тариф, необходимо авторизоваться.</p>
        <div className="characters">
          <img src={characters} alt="characters"></img>
        </div>
      </div>
      <SignIn />
    </div>
  );
}

export default Authorization;
