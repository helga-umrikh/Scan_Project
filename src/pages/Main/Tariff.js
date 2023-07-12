import React from "react";
import TariffCard from "./TariffCard";
import { dataMock } from "../../dataMock.js";
import { CardGroup } from "react-bootstrap";

function Tariff() {
  return (
    <>
      <CardGroup className="tariff-container">
        {dataMock.map((tariff) => (
          <TariffCard tariffData={tariff} />
        ))}
      </CardGroup>
    </>
  );
}

export default Tariff;
