import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./React-elastic-carousel.css";
import Image from "./Images.js";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Elastic_carousel = ({}) => {
 

  return (
    <div className="App">
      <div className="controls-wrapper">
      </div>
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {Image.map((image) => (
             <Item>
              <li>
                {" "}
                <img src={image} alt="" key={image} />
              </li>
            </Item>
          ))}
        </Carousel>
      </div>
      
    </div>
  );
};
export default Elastic_carousel;
