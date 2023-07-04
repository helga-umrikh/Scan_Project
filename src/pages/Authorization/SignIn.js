import React, { useState } from "react";
import "./Authorization.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Tabs, Form, Button } from "react-bootstrap";
import google_icon from "./../../images/google_icon.svg";
import facebook_icon from "./../../images/facebook_icon.svg";
import yandex_icon from "./../../images/yandex_icon.svg";
import { Link } from "react-router-dom";

function SignIn() {
  //state variable for each input
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setFormValidity] = useState(false);

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form is validated');
  };

  //check for values
  const isInputValid = () => {
    return login !== "" && password !== "";
  };

  const handleFormValidity = () => {
    setFormValidity(isInputValid());
  };

  //input pages buttons

  return (
    <div className="sign-in">
      <Form
        className="signup-form shadow rounded p-4 p-sm-5 bg-white"
        onSubmit={handleSubmit}
      >
        <Tabs defaultActiveKey="logIn" className="mb-3">
          <Tab className="tab" eventKey="logIn" title="Войти">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Логин или номер телефона:</Form.Label>
              <Form.Control
                className="name-input"
                type="text"
                onChange={handleLoginChange}
                onBlur={handleFormValidity}
                required
              />
              <Form.Control.Feedback type="invalid">
                "Введите корректные данные"
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Пароль:</Form.Label>
              <Form.Control
                className="password-input"
                type="password"
                onChange={handlePasswordChange}
                onBlur={handleFormValidity}
                required
              />
            </Form.Group>
            <Button variant="primary" value="Submit Button" type="submit" disabled={isFormValid} className="submit-btn">
              Войти
            </Button>
            <p>
              <Link to="/reset_password">Восстановить пароль</Link>
            </p>
            <p>Войти через:</p>
            <div>
              <Button>
                <img src={google_icon} alt="google icon" />
              </Button>
              <Button>
                <img src={facebook_icon} alt="facebook icon" />
              </Button>
              <Button>
                <img src={yandex_icon} alt="yandex icon" />
              </Button>
            </div>
          </Tab>
          <Tab className="tab" eventKey="register" title="Зарегистрироваться">
            <Form.Group className="mb-3"></Form.Group>
          </Tab>
        </Tabs>
      </Form>
    </div>
  );
}

export default SignIn;
