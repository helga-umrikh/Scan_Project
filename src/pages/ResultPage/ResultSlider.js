import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useSelector } from "react-redux";
// import { selectHistograms } from "../../features/histogramsSlice";
// import Slide from "./Slide";

function ResultSlider() {
  const sliderRef = useRef(null);

  const handleBeforeChange = (current, next) => {
    if (next === 0 || current === 0) {
      sliderRef.current.slickPause();
    } else {
      sliderRef.current.slickPlay();
    }
  };
    // const data = useSelector(selectHistograms);
    // const totalDocs = data[0];
    // const totalDocsData = totalDocs.data;
    // const riskFactors = data[1];
    // const riskFactorsData = riskFactors.data;

    // const sliderData = totalDocsData.map(({ date, value }, idx) => {
    //   return {
    //     date,
    //     docsValue: value,
    //     risksValue: riskFactorsData[idx].value,
    //   };
    // });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: handleBeforeChange,
  };

  return (
    <div>
          <div>
        <p>Период</p>
        <p>Всего</p>
        <p>Риски</p>
      </div>
    <Slider ref={sliderRef} {...settings}>
      {/* {sliderData.map((e) => (
        <Slide sliderInfo={e}/>
      ))} */}
      <div>
        <p>HHHHH</p>
      </div>
      <div>
        <p>HHHHH</p>
      </div>
      <div>
        <p>HHHHH</p>
      </div>
      <div>
        <p>HHHHH</p>
      </div>
      <div>
        <p>iiii</p>
      </div>
      <div>
        <p>iiii</p>
      </div>
    </Slider>
    </div>
  );
}

export default ResultSlider;
