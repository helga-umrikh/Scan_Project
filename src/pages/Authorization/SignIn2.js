import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Authorization.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Nav, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logIn } from "../../features/userSlice";
import google_icon from "./../../images/google_icon.svg";
import facebook_icon from "./../../images/facebook_icon.svg";
import yandex_icon from "./../../images/yandex_icon.svg";
import lock_icon from "./../../images/lock-icon.svg";

function SignIn2() {
  const navigate = useNavigate();

  //state variable for each input and error
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  //FUNC TO IMPORT DATA TO REDUCER AND UPDATE THE STATE
  const dispatch = useDispatch();

  //функции сохранения вводимых логин и пароля
  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //функция сабмита
  const handleSubmit = (event) => {
    event.preventDefault();

    const loginUser = async () => {
      const getAccountInfo = (token) => {
        if (token.errorCode) {
          return;
        } else {
          setError(false);
          const url = "https://gateway.scan-interfax.ru/api/v1/account/info";
          const options = {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
            },
          };
          return fetch(url, options)
            .then((response) => {
              return response.json();
            })
            .then((userData) => {
              localStorage.setItem("userData", JSON.stringify(userData));
              return userData;
            })
            .then((userData) => {
              dispatch(
                logIn({
                  logIn: true,
                  userInfo: userData.eventFiltersInfo,
                })
              );
            })
            .catch(function (error) {
              throw new Error(error);
            });
        }
      };

      const authorizeUser = () => {
        //fetch ЗАПРОС АВТОРИЗАЦИИ
        const url = "https://gateway.scan-interfax.ru/api/v1/account/login";
        const data = {
          login,
          password,
        };

        const options = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        };

        return fetch(url, options)
          .then((response) => {
            return response.json();
          })
          .then((token) => {
            localStorage.setItem("authToken", JSON.stringify(token));
            if (token.errorCode) {
              setError(true);
              return token;
            }
            navigate("/");
            return token;
          })
          .catch(function (error) {
            alert(error);
          });
      };

      const token = await authorizeUser();
      getAccountInfo(token);

      setLogin("");
      setPassword("");
    };

    loginUser();
  };

  return (
    <div className="sign-in">
    <img src={lock_icon} className="sign-in__icon" alt="lock icon"/>
      <Form
        className="signup-form 
        shadow rounded bg-white"
        onSubmit={handleSubmit}
      >
        <Tab.Container defaultActiveKey="logIn">
          <Nav variant="underline  justify-content-center row-xs pb-4 text-center">
            <Nav.Item className="col">
              <Nav.Link eventKey="logIn">Войти</Nav.Link>
            </Nav.Item>
            <Nav.Item className="col">
              <Nav.Link eventKey="register">Зарегистрироваться</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="logIn">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Логин или номер телефона:</Form.Label>
                <Form.Control
                  isInvalid={error}
                  className="name-input"
                  type="text"
                  value={login}
                  onChange={handleLoginChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Введите корректные данные
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль:</Form.Label>
                <Form.Control
                  isInvalid={error}
                  className="password-input"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Неправильный пароль
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                variant="primary"
                value="Submit Button"
                type="submit"
                className="submit-btn btn-lg"
                disabled={login === "" && password === ""}
              >
                Войти
              </Button>
              <Form.Group className="mb-3 text-center p-2">
                <Link className="reset-password" to="#">
                  Восстановить пароль
                </Link>
              </Form.Group>
            </Tab.Pane>
            <Tab.Pane eventKey="register">
              <Form.Group className="mb-3"></Form.Group>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        <div>
          <p className="form-label">Войти через:</p>
          <div className="">
            <Button className="sign-in__social-btn" size="sm">
              <img src={google_icon} alt="google icon" />
            </Button>
            <Button className="sign-in__social-btn" size="sm">
              <img src={facebook_icon} alt="facebook icon" />
            </Button>
            <Button className="sign-in__social-btn" size="sm">
              <img src={yandex_icon} alt="yandex icon" />
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default SignIn2;
