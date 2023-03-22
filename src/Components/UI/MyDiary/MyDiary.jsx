import React from "react";
import "./MyDiary.css";
import Button from "../Button/Button";
const MyDiary = () => {
  const divs = [];
  for (let i = 0; i < 8; i++) {
    divs.push(  <div key={i} className="MyDiary_col">
    <div className="MyDiary_Item">
      <h2>2021.05.21 
      <h2>23:25</h2></h2>
      <p>
        私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
      </p>
    </div>
  </div>);
  }
  return (
    <div className="MyDiary">
      <h1>MY DIARY</h1>
      <div className="MyDiary_contain">
        {divs}
      </div>
    
      <div style={{width:"100%",marginTop:"30px"}}>
      <Button/>
      </div>
      
    </div>
  );
};

export default MyDiary;
