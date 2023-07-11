import React from "react";

function Slide({ 
  sliderInfo: { date, value, riskValue } 
  }) {
  return (
    <div>
      <p>{date}</p>
      <p>{value}</p>
      <p>{riskValue}</p>
    </div>
  );
}

export default Slide;
