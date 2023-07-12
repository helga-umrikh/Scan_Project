import React from "react";
import { Button } from "react-bootstrap";
import "./ResultPage.css";
import result_icon from "../../images/result_icon.svg";
import ResultSlider from "./ResultSlider";
import {TestSlider} from "./TestSlider";
import DocumentCard from "./DocumentCard";

function ResultPage() {

  const getDocuments = () => {
    const resultData = localStorage.getItem("resultData");
    const parsedResult = JSON.parse(resultData);
    const itemsArr = parsedResult.items;
    const idsArray = itemsArr.map(e => e.encodedId);
    localStorage.setItem("itemsIds", JSON.stringify(idsArray));
    return idsArray;
  };

    const ids = getDocuments();

     // берет информацию для карточек статей
  const cardsData = (ids) => {
    const token = JSON.parse(localStorage.getItem("authToken"));
    const url = "https://gateway.scan-interfax.ru/api/v1/documents";
    const payload = {
      ids,
    };

    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    };

    return fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        localStorage.setItem("cardsData", JSON.stringify(response));
        return response;
      })
      .catch(function (error) {
        throw new Error(error);
      });
  }

  cardsData(ids);

  return (
    <div className="result-page">
      <div className="result-page__container">
        <div className="result-page__top-container">
          <div className="result-page__title-box">
            <h2 className="result-page__title">
              ИЩЕМ.СКОРО <br /> БУДУТ РЕЗУЛЬТАТЫ
            </h2>
            <p className="result-page__subtitle">
              Поиск может занять некоторое время, просим сохранять терпение.
            </p>
          </div>
          <div className="result-page__icon">
            <img className="result-page__icon" src={result_icon}></img>
          </div>
        </div>
        <div className="result-page__mid-container">
          <div className="result-page__title-box">
            <h3 className="result-page__mid-title pb-2">ОБЩАЯ СВОДКА</h3>
            <p className="result-page__result-subtitle">
              Найдено NUM вариантов
            </p>
          </div>
          <ResultSlider />
          {/* <TestSlider /> */}
        </div>
        <h3 className="result-page__mid-title mb-5">СПИСОК ДОКУМЕНТОВ</h3>
        <div className="result-page__cards-container mb-5">
        <DocumentCard />
        <DocumentCard />
        </div>
        <div className="result-page__button-box">
          <Button className="result-page__button">Показать больше</Button>
        </div>
      </div>
    </div>
  );
}

export default ResultPage; 