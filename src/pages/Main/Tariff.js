import React from "react";
import TariffCard from "./TariffCard";
import { dataMock } from "../../dataMock.js";

function Tariff() {
  const rubble = "\u20bd";
  return (
    <div>
    <TariffCard tariffData={dataMock[0]}/>
    </div>
  );
}

export default Tariff;
