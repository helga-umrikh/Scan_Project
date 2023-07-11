import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ResultSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialState: 0,
  };

  return (
      <Slider {...settings}>
        <div>
          <p>Период</p>
          <p>Всего</p>
          <p>Риски</p>
        </div>
        <div>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </Slider>
  );
}

export default ResultSlider;
