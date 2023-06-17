import React from "react";
import characters from "./../../images/Characters.svg";
import SignIn from "./SignIn";

function Authorization() {
  return (
    <div className="auth">
      <div className="auth__box">
        <p>Для оформления подписки на тариф, необходимо авторизоваться.</p>
        <div className="characters">
          <img src={characters} alt="characters"></img>
        </div>
      </div>
      <SignIn />
    </div>
  );
}

export default Authorization;
