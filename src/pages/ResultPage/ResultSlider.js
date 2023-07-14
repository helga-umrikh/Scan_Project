import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useSelector } from "react-redux";
// import { selectHistograms } from "../../features/histogramsSlice";
// import Slide from "./Slide";

function ResultSlider() {
  const data = useSelector(selectHistograms);
  const totalDocs = data[0];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {/* {sliderData.map((e) => (
        <Slide sliderInfo={e}/>
      ))} */}
        <div>
          <p>Период</p>
          <p>Всего</p>
          <p>Риски</p>
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
