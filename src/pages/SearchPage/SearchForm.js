import React from "react";
import { Form, Button } from "react-bootstrap";

function SearchForm() {
  return (
    <Form className="signup-form shadow rounded bg-white">
      <Form.Group>
        <Form.Label>ИНН компании*</Form.Label>
        <Form.Control type="text" placeholder="10 цифр" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Тональность</Form.Label>
        <Form.Select>
          <option>Любая</option>
          <option>Позитивная</option>
          <option>Негативная</option>
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label>Количество документов о выдаче*</Form.Label>
        <Form.Control
          type="number"
          min="1"
          max="1000"
          placeholder="от 1 до 1000"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Диапазон поиска*</Form.Label>
        {/* НЕ РАБОТАЕТ PLACEHOLDER */}
        <Form.Control type="date" placeholder="Дата начала" />
        <Form.Control type="date" placeholder="Дата конца" />
      </Form.Group>

      <Form.Group>
        <Form.Check type="checkbox" label="Признак максимальной полноты" />
        <Form.Check type="checkbox" label="Упоминания в бизнес-контексте" />
        <Form.Check type="checkbox" label="Главная роль в публикации" />
        <Form.Check
          type="checkbox"
          label="Публикации только с риск-факторами"
        />
        <Form.Check
          type="checkbox"
          label="Включать технические новости рынков"
        />
        <Form.Check type="checkbox" label="Включать анонсы и календари" />
        <Form.Check type="checkbox" label="Включать сводки новостей" />
      </Form.Group>

      <Form.Group>
        <Button
          variant="primary"
          value="Submit Button"
          type="submit"
          className="submit-btn"
        >
          Поиск
        </Button>
        <p>*Обязательные к заполнению поля</p>
      </Form.Group>
    </Form>
  );
}

export default SearchForm;
