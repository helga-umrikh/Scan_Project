import React from 'react'
import { Button } from "react-bootstrap"
import "./ResultPage.css";
import result_icon from "../../images/result_icon.svg"
import ResultSlider from './ResultSlider';
import { useSelector } from 'react-redux';
import { selectData } from "../../features/histogramsSlice";
import DocumentCard from './DocumentCard';

function ResultPage() {
  const resultData = useSelector(selectData);
  const items = resultData.items;

  return (
    <div className='result-page'>
      <div className='result-page__container p-5'>
      <div className='result-page__top-container'>
        <div className='result-page__title-box'>
          <h2 className='result-page__title'>ИЩЕМ.СКОРО <br/> БУДУТ РЕЗУЛЬТАТЫ</h2>
          <p className='result-page__subtitle'>Поиск может занять некоторое время, просим сохранять терпение.</p>
        </div>
        <div className='result-page__icon'>
          <img src={result_icon}></img>
        </div>
      </div>
      <div className='result-page__mid-container'>
        <div className='result-page__title-box'>
          <h3 className='result-page__mid-title pb-2'>ОБЩАЯ СВОДКА</h3>
          <p className='result-page__result-subtitle'>Найдено {items.length} вариантов</p>
        </div>
        <ResultSlider />
      </div>
      <h3 className='result-page__mid-title mb-4'>СПИСОК ДОКУМЕНТОВ</h3>
      <div className='result-page__cards-container'>
        <DocumentCard />
        <DocumentCard />
      </div>
      <div className='result-page__button'>
        <Button>Показать больше</Button>
      </div>
      </div>
    </div>
  )
}

export default ResultPage