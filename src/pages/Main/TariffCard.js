import React from "react";
import { useSelector } from "react-redux";
import "./Main.css";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import ok from "./../../images/ok-symbol.svg";
import { selectUser } from "../../features/userSlice";

function TariffCard({
  tariffData: {
    isCurrentTariff,
    color,
    textColor,
    title,
    subtitle,
    image,
    discountPrice,
    totalCost,
    mounthlyPrice,
    tariffBenefits,
  },
}) {
  const rubbleSymbol = "\u20bd";
  const user = useSelector(selectUser);

  return (
    <div className="tariff-card__container">
      <Card
        className="tariff-card shadow text-start"
        style={user && isCurrentTariff ? { border: '2px solid ', borderColor: color } : {}}
      >
        <Card.Header
          className="tariff-card__header"
          style={{ backgroundColor: color }}
        >
          <div>
            <Card.Title
              className="fs-3 fw-semibold"
              style={{ color: textColor }}
            >
              {title}
            </Card.Title>
            <Card.Text
              className="fs-5 fw-normal"
              style={{ color: `${textColor}` }}
            >
              {subtitle}
            </Card.Text>
          </div>
          <div className="tariff-card__image-box">
            <img className="tariff-card__image" src={image} />
          </div>
        </Card.Header>
        <Card.Body className="d-flex flex-column justify-content-between">
          <div className="d-flex my-3">
            <Card.Title className="fs-3">{`${discountPrice} ${rubbleSymbol}`}</Card.Title>
            <Card.Title className="fs-3 mx-3 opacity-75">
              <span style={{ textDecoration: "line-through" }}>
                {totalCost} {rubbleSymbol}
              </span>
            </Card.Title>
            {user && isCurrentTariff ? (
              <div className="tariff-card__badge">
                <Card.Text>Текущий тариф</Card.Text>
              </div>
            ) : (
              <></>
            )}
          </div>
          <Card.Text className="fs-5"> {mounthlyPrice && `
            или ${mounthlyPrice} ${rubbleSymbol} /мес. при рассрочке на 24
            мес.`}
          </Card.Text>
          <div className="tariff-card__benefits">
            <Card.Subtitle className="fw-bolder my-2 fs-5">В тариф входит:</Card.Subtitle>
            <div>
              <div className="d-flex fs-5">
                <img className="mx-2" src={ok} />
                <Card.Text>{tariffBenefits[0]}</Card.Text>
              </div>
              <div className="d-flex fs-5">
                <img className="mx-2" src={ok} />
                <Card.Text>{tariffBenefits[1]}</Card.Text>
              </div>
              <div className="d-flex fs-5">
                <img className="mx-2" src={ok} />
                <Card.Text>{tariffBenefits[2]}</Card.Text>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center w-100">
            {user && isCurrentTariff ? (
              <Button className="tariff-card__btn-personal">Перейти в личный кабинет</Button>
            ) : (
              <Button className="tariff-card__btn-more">Подробнее</Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TariffCard;
