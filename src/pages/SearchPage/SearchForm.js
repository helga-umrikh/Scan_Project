import React, { useState } from "react";
import "./SearchPage.css";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { responseData } from "../../features/histogramsSlice";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchForm() {
  const dispatch = useDispatch();

  const initialFormState = {
    innCompany: {
      value: "",
      isInvalid: null,
    },
    tonality: {
      value: "any",
      isInvalid: null,
    },
    limit: {
      value: 0,
      isInvalid: null,
    },
    startDate: {
      value: "",
      isInvalid: null,
    },
    endDate: {
      value: "",
      isInvalid: null,
    },
    maxFullness: {
      title: "Признак максимальной полноты",
      checked: false,
    },
    inBusinessNews: {
      title: "Упоминания в бизнес-контексте",
      checked: false,
    },
    onlyMainRole: {
      title: "Главная роль в публикации",
      checked: false,
    },
    onlyWithRiskFactors: {
      title: "Публикации только с риск-факторами",
      checked: false,
    },
    excludeTechNews: {
      title: "Включать технические новости рынков",
      checked: false,
    },
    excludeAnnouncements: {
      title: "Включать анонсы и календари",
      checked: false,
    },
    excludeDigests: {
      title: "Включать сводки новостей",
      checked: false,
    },
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleFormInput = ({ target }, type) => {
    const { id, value } = target;

    if (type === "checkbox") {
      const { checked } = target;

      setFormState((prevState) => {
        return {
          ...prevState,
          [id]: {
            checked,
            title: prevState[id].title,
          },
        };
      });

      return;
    }

    setFormState((prevState) => {
      return {
        ...prevState,
        [id]: {
          value,
        },
      };
    });
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    const token = JSON.parse(localStorage.getItem("authToken"));

    const getHistograms = (token) => {
      const {
        maxFullness,
        inBusinessNews,
        onlyMainRole,
        onlyWithRiskFactors,
        excludeTechNews,
        excludeAnnouncements,
        excludeDigests,
      } = initialFormState;
      const url =
        "https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms";
      const payload = {
        issueDateInterval: {
          startDate: formState.startDate.value,
          endDate: formState.endDate.value,
        },
        searchContext: {
          targetSearchEntitiesContext: {
            targetSearchEntities: [
              {
                type: "company",
                sparkId: null,
                entityId: null,
                inn: formState.innCompany.value,
                maxFullness: maxFullness.checked,
                inBusinessNews: inBusinessNews.checked,
              },
            ],
            onlyMainRole: onlyMainRole.checked,
            tonality: formState.tonality.value,
            onlyWithRiskFactors: onlyWithRiskFactors.checked,
            riskFactors: {
              and: [],
              or: [],
              not: [],
            },
            themes: {
              and: [],
              or: [],
              not: [],
            },
          },
          themesFilter: {
            and: [],
            or: [],
            not: [],
          },
        },
        searchArea: {
          includedSources: [],
          excludedSources: [],
          includedSourceGroups: [],
          excludedSourceGroups: [],
        },
        attributeFilters: {
          excludeTechNews: excludeTechNews.checked,
          excludeAnnouncements: excludeAnnouncements.checked,
          excludeDigests: excludeDigests.checked,
        },
        similarMode: "duplicates",
        limit: formState.limit.value,
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: ["totalDocuments", "riskFactors"],
      };

      const options = {
        method: "POST",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      };

      return fetch(url, options)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          localStorage.setItem("data", JSON.stringify(response));
          return response;
        })
        .then((response) => {
          const {data} = response;

          dispatch(
            responseData({
              data
            })
          );
        })
        .catch(function (error) {
          throw new Error(error);
        });
    };
    getHistograms(token);
  };

  return (
    <Form
      className="signup-form shadow rounded bg-white"
      onSubmit={handleSubmitSearch}
    >
      <Form.Group>
        <Form.Label>ИНН компании*</Form.Label>
        <Form.Control
          type="text"
          placeholder="10 цифр"
          id={"innCompany"}
          value={formState.innCompany.value}
          isInvalid={formState.innCompany.isInvalid}
          onChange={handleFormInput}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Тональность</Form.Label>
        <Form.Select
          id="tonality"
          value={formState.tonality.value}
          isInvalid={formState.tonality.isInvalid}
          onChange={handleFormInput}
        >
          <option value={"any"}>Любая</option>
          <option value={"negative"}>Позитивная</option>
          <option value={"positive"}>Негативная</option>
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label>Количество документов о выдаче</Form.Label>
        <Form.Control
          type="number"
          min="1"
          max="1000"
          //ПОЧЕМУ НЕ РАБОТАЕТ PLACEHOLDER
          placeholder="от 1 до 1000"
          id="limit"
          value={formState.limit.value}
          isInvalid={formState.limit.isInvalid}
          onChange={handleFormInput}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Диапазон поиска*</Form.Label>
        {/* НЕ РАБОТАЕТ PLACEHOLDER */}
        <Form.Control
          type="date"
          placeholder="Дата начала"
          id="startDate"
          value={formState.startDate.value}
          isInvalid={formState.startDate.isInvalid}
          onChange={handleFormInput}
          required
        />
        <Form.Control
          type="date"
          placeholder="Дата конца"
          id="endDate"
          value={formState.endDate.value}
          isInvalid={formState.startDate.isInvalid}
          onChange={handleFormInput}
          required
        />
      </Form.Group>

      <Form.Group>
        {Object.entries(formState).map(
          ([id, { title, checked }]) =>
            title &&
            checked !== undefined && (
              <div className="mb-3" key={id}>
                <Form.Check
                  type="checkbox"
                  id={id}
                  label={title}
                  checked={checked}
                  onChange={(e) => handleFormInput(e, "checkbox")}
                />
              </div>
            )
        )}
      </Form.Group>

      <Form.Group>
        <Button
          variant="primary"
          value="Submit Button"
          type="submit"
          className="submit-btn"
          // disabled={isValid()}
        >
          Поиск
        </Button>
        <p>*Обязательные к заполнению поля</p>
      </Form.Group>

      {/* ПОЧЕМУ НЕ ПОЯВЛЯЕТСЯ КОМПОНЕНТ
      <FontAwesomeIcon icon="fa-solid fa-asterisk" className="search-form__asterisk"/> */}
    </Form>
  );
}

export default SearchForm;
