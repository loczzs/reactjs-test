import React from "react";
import "./Blog.css";
import Button from "../Button/Button";
import { Blog_data } from "../../../asset/data/data";

const Blog = () => {
  return (
    <div className="Blog">
     <div className="Blog_contain">
     {Blog_data.map((item, index) => (
        <div className="Blog_col">
          <div className="Blog_title">
            <div className="img">
              <img  src={item.img} alt="" />
              <div className="Blog_time">
                <span>{item.time}</span>
              </div>
            </div>
            <div className="Blog_content">
                <h1>{item.content}</h1>
                <p>{item.content2}</p>
            </div>
          </div>
        </div>
      ))}
     </div>
      <div style={{width:"100%",marginTop:"24px"}}>
      <Button/>
      </div>
    </div>
  );
};

export default Blog;
