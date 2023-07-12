import React from "react";
import "./../Main/Main.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "./../../images/slide1.svg";
import slide2 from "./../../images/slide2.svg";
import slide3 from "./../../images/slide3.svg";

function SliderComponent() {
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 4000,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={slide1} />
        </div>
        <div>
          <img src={slide2} />
        </div>
        <div>
          <img src={slide3} />
        </div>
        <div>
          <img src={slide1} />
        </div>
        <div>
          <img src={slide2} />
        </div>
        <div>
          <img src={slide3} />
        </div>
      </Slider>
    </div>
  );
}

export default SliderComponent;
