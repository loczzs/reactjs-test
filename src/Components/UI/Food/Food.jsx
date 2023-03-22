import React from "react";
import "./Food.css";
import { Food_data } from "../../../asset/data/data.js";

import Button from "../Button/Button";
const Food = () => {
  return (
    <div className="Food">
      <div className="FoodCotain">
        {Food_data.map((item, index) => (
          <div className="food_item">
            <img src={item.img} alt="" />
            <div className="Food_content">
              <span>{item.content}</span>
            </div>
          </div>
        ))}
        <div style={{ width: "100%", marginTop: "28px" }}>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Food;
