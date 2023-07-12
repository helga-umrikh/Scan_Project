import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ResultPage.css";
import example from '../../images/example.png'

function DocumentCard({
  // cardInfo: {
  //   date,
  //   link,
  //   title,
  //   subtitle,
  //   tag,
  //   img,
  //   text,
  //   words
  // }
}) {
  return (
    <Card className="result-card">
      <Card.Body>
        <div className="result-card__head">
          <p className="result-card__head-text">13.09.2021</p>
          <Card.Link href="#" className="result-card__head-text">Комсомольская правда KP.RU</Card.Link>
        </div>
        <Card.Title className="result-card__title mb-3">
          Скиллфэктори - лучшая онлайн-школа для будущих айтишников
        </Card.Title>
        <div className="result-card__tag mb-3">
          <Card.Text>Технические новости</Card.Text>
        </div>
        <Card.Img src={example}></Card.Img>
        <Card.Text className="result-card__text my-3">
          SkillFactory — школа для всех, кто хочет изменить свою карьеру и
          жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4
          континентов, самому взрослому студенту сейчас 86 лет. Выпускники
          работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru,
          Яндексе, Ozon и других топовых компаниях. <br/> Принципы SkillFactory:
          акцент на практике, забота о студентах и ориентир на трудоустройство.
          80% обучения — выполнение упражнений и реальных проектов. Каждого
          студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А
          карьерный центр помогает составить резюме, подготовиться к
          собеседованиям и познакомиться с IT-рекрутерами.
        </Card.Text>
        <div className="result-card__footer">
          <Button className="result-card-button my-3">Читать в источнике</Button>
          <p className="result-card__head-text">1000 слова</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default DocumentCard;
