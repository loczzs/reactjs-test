import React from "react";
import { Hex_data } from "../../../asset/data/data";
import hex from "../../../asset/images/Hex.png";
import "./Hex.css";
const Hex = () => {
  return (
    <div className="Hex">
      <div className="Hex_contain">
        {Hex_data.map((item, index) => (
          <div className="hex_col">
            <div className="hex_item" key={item.id}>
              <img src={hex} alt="" />
              <div className="hex_content">
                <img src={item.icon} alt="" />
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hex;
