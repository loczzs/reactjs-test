import React from "react";
import "./Recommend.css";
import { Recommend_data } from "../../../asset/data/data";
import recordBody from "../../../asset/images/BODY RECORD.png"
const Recommend = () => {
  return (
  <div style={{marginTop:"56px"}}>
      <div className="Recommend">
    <div className="RecommendContain">
    {Recommend_data.map((item, index) => (
        <div className="Recommend_item" key={item.id}>
          <div className="Recommend_card">
            <img src={item.img} alt="" />
              <div className="Recommend_content">
                <h1>{item.title}</h1>
                <div >
                  <p>{item.content}</p>
                </div>
              </div>
          </div>
        </div>
      ))}
    </div>
      
    </div>
    <div className="Recommendimg"><img style={{width:"100%"}} src={recordBody} alt="" /></div>
  </div>
  );
};

export default Recommend;
