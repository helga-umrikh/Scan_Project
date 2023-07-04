import React, { useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import SliderComponent from "./SliderComponent";
import Tariff from "./Tariff";
import mainTopImg from "./../../images/main_top_img.svg";
import mainMidImg from "./../../images/main_mid_img.svg";

function Main() {
  const user = useSelector(selectUser);

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <div className="main-top__box">
            <h1 className="main-title">
              СЕРВИС ПО ПОИСКУ ПУБЛИКАЦИЙ О КОМПАНИИ ПО ЕГО ИНН
            </h1>
            <p>
              Комплексный анализ публикаций, получение данных в формате PDF на
              электронную почту.
            </p>
            { user != null && <button>
              <Link to="/search_page">Запросить данные</Link>
            </button>}
          </div>
          <div>
            <img src={mainTopImg} alt="user interracting with services" />
          </div>
        </div>
        <div className="main-mid">
          <div className="main-mid__box">
            <h2 className="main-subtitle">ПОЧЕМУ ИМЕННО МЫ</h2>
            <SliderComponent></SliderComponent>
          </div>
          <img src={mainMidImg} alt="user interracting with services" />
        </div>
        <div className="main-bottom">
          <h2 className="main-subtitle">НАШИ ТАРИФЫ</h2>
          <Tariff />
        </div>
      </div>
    </div>
  );
}

export default Main;
