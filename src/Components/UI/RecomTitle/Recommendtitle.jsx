import React from "react";
import { title } from "../../../asset/data/data";
import "./recomtitle.css";
const Recommendtitle = () => {
  return (
    <div className="recomtitle">
      <div className="recomtitcontain">
      {title.map((item, index) => (
        <div className="recomtitle_col">
          <div className="recomtitle_title">
            <h1>RECOMMENDED</h1>
            <h1>{item.title}</h1>
            <div className="line"></div>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Recommendtitle;
