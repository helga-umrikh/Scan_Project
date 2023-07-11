import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ResultPage.css"

function DocumentCard() {
  return (
    <Card>
      <Card.Body>
        <div className="card__date-source">
          <p>date</p>
          <Card.Link href="">link</Card.Link>
        </div>
        <Card.Title>Title</Card.Title>
        <div className="card__tag">
          <Card.Text>Tag</Card.Text>
        </div>
        <Card.Img></Card.Img>
        <Card.Text>Text</Card.Text>
        <div>
        <Button>Читать в источнике</Button>
        <p>NUM слова</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default DocumentCard;
