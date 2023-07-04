import React from 'react';
import "./Main.css"
import { Button } from "react-bootstrap";
import ok from "./../../images/ok-symbol.svg";

function TariffCard({ tariffData: { title, subtitle, discountPrice, totalCost, mounthlyPrice, tariffBenefits } }) {
  const rubbleSymbol = "\u20bd";

  return (
    <div>
      <div className="tariff-card">
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div>
          <div className='badge'>Текущий тариф</div>
          <div>
            <h3>
        {`${discountPrice} ${rubbleSymbol}`}
              <span style={{ textDecoration: "line-through" }}>
              {totalCost} {rubbleSymbol}
              </span>
            </h3>
            <p>или {`${mounthlyPrice} ${rubbleSymbol}`}/мес. при рассрочке на 24 мес.</p>
          </div>
          <div>
            <p>В тариф входит:</p>
            <div>
              <div>
                <img src={ok}></img>
                <p>{tariffBenefits[0]}</p>
              </div>
              <div>
              <img src={ok}></img>
                <p>{tariffBenefits[1]}</p>
              </div>
              <div>
              <img src={ok}></img>
                <p>{tariffBenefits[2]}</p>
              </div>
            </div>
          </div>
          <Button>Перейти в личный кабинет</Button>
          <Button>Подробнее</Button>
        </div>
      </div>
      <div className="tariff-card"></div>
      <div className="tariff-card"></div>
    </div>
  )
}

export default TariffCard