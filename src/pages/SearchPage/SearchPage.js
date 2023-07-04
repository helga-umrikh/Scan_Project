import React from "react";
import "./SearchPage.css";
import docs from '../../images/docIcon.svg'
import folder from '../../images/foldersIcon.svg'
import searchGroup from '../../images/searchGroup.svg'
import SearchForm from "./SearchForm";

function SearchPage() {
  return (
    <div className="search-page">
      {/* <div className="search-page__container">
        <div>
          <div>
            <h2>НАЙДИТЕ НЕОБХОДИМЫЕ ДАННЫЕ В ПАРУ КЛИКОВ</h2>
            <p>
              Задайте параметры поиска. <br />
              Чем больше заполните, тем точнее поиск
            </p>
          </div>
          <div>
            <img src={docs}/>
            <img src={folder}/>
          </div>
        </div>
        <div> */}
          <SearchForm />
          {/* <img src={searchGroup}/>
        </div>
      </div> */}
    </div>
  );
}

export default SearchPage;
