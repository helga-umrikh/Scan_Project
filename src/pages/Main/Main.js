import React, { useState } from "react";
import "./Main.css";
import { Button } from 'react-bootstrap'
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
      <div className="main-container p-5">
        <div className="main-top">
          <div className="main-top__box">
            <h1 className="main-title mb-4">
              СЕРВИС ПО ПОИСКУ ПУБЛИКАЦИЙ <br/> О КОМПАНИИ  ПО ЕГО ИНН
            </h1>
            <p className="main-top__slogan">
              Комплексный анализ публикаций, получение данных <br/> в формате PDF на
              электронную почту.
            </p>
            { user != null && <Button className="request-data-btn btn-lg">
              <Link to="/search_page" className="request-data-link text-decoration-none">Запросить данные</Link>
            </Button>}
          </div>
          <div className="main-top__img-box">
            <img className="main-top__img" src={mainTopImg} alt="user interracting with services" />
          </div>
        </div>
        <div className="main-mid">
          <div className="main-mid__box">
            <h2 className="main-subtitle">ПОЧЕМУ ИМЕННО МЫ</h2>
            <SliderComponent></SliderComponent>
          </div>
          <div>
          <img  className="main-mid__img" src={mainMidImg} alt="user interracting with services" />
          </div>
        </div>
        <div className="main-bottom">
          <h2 className="main-subtitle my-5">НАШИ ТАРИФЫ</h2>
          <Tariff />
        </div>
      </div>
    </div>
  );
}

export default Main;
