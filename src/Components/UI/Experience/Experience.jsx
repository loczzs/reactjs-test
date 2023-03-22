import React from "react";
import "./Experience.css";
import text from "../../../asset/images/●.png";
const Experience = () => {
  const divs = [];
  for (let i = 0; i < 8; i++) {
    divs.push(
      <div key={i} className="Exper_item">
        <div className="content1">
         
          <div>
            <h2> 家事全般（立位・軽い）</h2>
            <p className="kcal"> 26kcal</p>
          </div>
        </div>
        <p className="time">10 min</p>
      </div>
    );
  }
  return (
    <div className="Experience">
      <div className="Expercontain">
        <div className="Expercontent">
          <p>MY EXERCISE</p>
          <span>2021.05.21</span>
        </div>
        <div className="Experinfo">
          <div className="Experlist">{divs}</div>
          <div className="nav">
            <div className="scroll"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
