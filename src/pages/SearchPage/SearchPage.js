import React from "react";
import "./SearchPage.css";
import docs from '../../images/docIcon.svg'
import folder from '../../images/foldersIcon.svg'
import searchGroup from '../../images/searchGroup.svg'
import SearchForm from "./SearchForm";

function SearchPage() {
  return (
    <div className="search-page">
      <div className="search-page__container">
        <div className="search-page__head mb-3">
          <div className="search-page__title-box">
            <h2 className="search-page__title mb-4">НАЙДИТЕ НЕОБХОДИМЫЕ ДАННЫЕ В ПАРУ КЛИКОВ</h2>
            <p className="search-page__subtitle">
              Задайте параметры поиска. <br />
              Чем больше заполните, тем точнее поиск
            </p>
          </div>
          <div>
            <img className="docs-image" src={docs}/>
            <img className="folder-image" src={folder}/>
          </div>
        </div>
        <div className="search-page__main ">
          <SearchForm />
          <img className="search-page__img_bottom" src={searchGroup}/>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
