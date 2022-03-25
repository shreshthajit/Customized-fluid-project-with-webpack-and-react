import React from "react";
 import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slick-slider.css";
import Images from "./Images.js";
const Responsive = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings} className="container justify-content-center">
        {Images.map((image) => {
          return (
            <div className="items">
              <img src={image} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Responsive;
