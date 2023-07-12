import React, { useState } from "react";
import "./SearchPage.css";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { responseData, objectSearch } from "../../features/histogramsSlice";
import InnValidation from './InnValidation';


function SearchForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialFormState = {
    innCompany: {
      value: "",
      isInvalid: null,
      checkValidation: value => InnValidation(value)
    },
    tonality: {
      value: "any",
    },
    limit: {
      value: 0,
      isInvalid: null,
      checkValidation: value => value >= 1 && value <= 1000
    },
    startDate: {
      value: "",
      isInvalid: null,
      checkValidation: (value, prevState) => {
        return prevState.endDate.value !== "" ? prevState.endDate.value >= value : true
      }
    },
    endDate: {
      value: "",
      isInvalid: null,
      checkValidation: (value, prevState) => {
        return prevState.startDate.value !== "" ? prevState.startDate.value <= value : true
      }
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

  const checkFormValidation = () => {
    return !Object.values(formState)
      .filter(({ isInvalid }) => isInvalid !== undefined)
      .every(({ isInvalid }) => isInvalid === false || isInvalid === null)
  }

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

    if (formState[id].isInvalid !== undefined) {
      setFormState((prevState) => {
        return {
          ...prevState,
          [id]: {
            ...prevState[id],
            value,
            isInvalid: !formState[id].checkValidation(value, prevState),
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
          const { data } = response;

          dispatch(
            responseData({
              data,
            })
          );
        })
        .catch(function (error) {
          throw new Error(error);
        });
    };
    getHistograms(token);

    const getTotalResult = (token) => {
      const {
        maxFullness,
        inBusinessNews,
        onlyMainRole,
        onlyWithRiskFactors,
        excludeTechNews,
        excludeAnnouncements,
        excludeDigests,
      } = initialFormState;

      const url = "https://gateway.scan-interfax.ru/api/v1/objectsearch";
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
          localStorage.setItem("resultData", JSON.stringify(response));
          return response;
        })
        .then((response) => {
          dispatch(
            objectSearch({
              resultData: response
            })
          );
        })
        .then(() => {
          navigate("/result_page");
        })
        .catch(function (error) {
          throw new Error(error);
        })
    };

    getTotalResult(token);
  };

  return (
    <Form
      className="search-form shadow rounded bg-white"
      onSubmit={handleSubmitSearch}
    >
      <div>
        <Form.Group>
          <Form.Label className="text-dark">ИНН компании*</Form.Label>
          <Form.Control
            className="search-form__input"
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
          <Form.Label className="text-dark">Тональность</Form.Label>
          <Form.Select
            className="search-form__input"
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
          <Form.Label className="text-dark">
            Количество документов о выдаче*
          </Form.Label>
          <Form.Control
            className="search-form__input"
            type="number"
            min="1"
            max="1000"
            placeholder="от 1 до 1000"
            id="limit"
            value={formState.limit.value}
            isInvalid={formState.limit.isInvalid}
            onChange={handleFormInput}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="text-dark">Диапазон поиска*</Form.Label>

          <div className="search-form__date-group">
            <Form.Control
              className="search-form__input-date me-4"
              type="date"
              placeholder="Дата начала"
              id="startDate"
              value={formState.startDate.value}
              isInvalid={formState.startDate.isInvalid}
              onChange={handleFormInput}
              required
            />
            <Form.Control
              className="search-form__input-date"
              type="date"
              placeholder="Дата конца"
              id="endDate"
              value={formState.endDate.value}
              isInvalid={formState.endDate.isInvalid}
              onChange={handleFormInput}
              required
            />
          </div>
        </Form.Group>
      </div>
      <div className="search-form__r-column">
        <Form.Group className="search-form__checkboxes">
          {Object.entries(formState).map(
            ([id, { title, checked }]) =>
              title &&
              checked !== undefined && (
                <div className="mb-2" key={id}>
                  <Form.Check
                    className="search-form__check"
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

        <Form.Group className="search-form__button-box">
          <Button
            variant="primary"
            value="Submit Button"
            type="submit"
            className="search-form__submit-btn"
            disabled={checkFormValidation()}
          >
            Поиск
          </Button>
          <p>*Обязательные к заполнению поля</p>
        </Form.Group>
      </div>
    </Form>
  );
}

export default SearchForm;
