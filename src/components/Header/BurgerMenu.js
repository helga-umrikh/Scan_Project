import React from "react";
import "./Header.css"
import { fallDown as Menu } from "react-burger-menu";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";
import logoMob from "./../../images/logo-mob.svg";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import Register from "./Register";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "20px",
    top: "20px",
  },
  bmBurgerBars: {
    background: "#029491",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100vh",
    width: "100vw",
  },
  bmMenu: {
    background: "#029491",
    fontSize: "1.15em",
    height: "100vh",
    width: "100vw",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

function BurgerMenu() {
  const user = useSelector(selectUser);
  return (
    <Menu styles={styles} animation="fallDown">
      <div className="logo-mob">
        <img src={logoMob} alt="logo-mob" />
      </div>
      <Navbar />
      <div className="header_logInBox-mobile">
        {user ? <UserProfile /> : <Register />}
      </div>
    </Menu>
  );
}

export default BurgerMenu;
