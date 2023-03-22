import React from "react";
import mainphoto from "../../asset/images/main_photo.png";
import maingraph from "../../asset/images/main_graph.png";
import halfcircle from "../../asset/images/halfcircle.png";
import number from "../../asset/images/number.png"
import "./Carousel.css";
const Carousel = () => {
  return (
    <div className="Carousel">
      <div className="img1">
        <img src={mainphoto} alt="" />
        <div className="circle">
          <div className="number">
            <img src={halfcircle} alt="" />
            <img  className="numberz" src={number} alt="" />
          </div>
        </div>
      </div>
      <div className="img2">
        <img src={maingraph} alt="" />
      </div>
    </div>
  );
};

export default Carousel;
