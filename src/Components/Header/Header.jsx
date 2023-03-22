import React, { useRef, useEffect, useState } from "react";
import "./header.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../asset/images/logo (1).png";
import { NAV__LINKS } from "../../asset/data/data.js";
import { useNavigate } from "react-router-dom";
import info from "../../asset/images/icon_info.png";
import count from "../../asset/images/info_count.png";
import Menu from "../../asset/images/icon_menu.png";
import iconclose from "../../asset/images/icon_close.png";
const navModal = ["目標", "選択中のコース", "コラム一覧", "設定"];
const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="navigation">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/home");
            }}
          >
            <img src={logo} alt="" />
          </div>

          <div className="nav__menu">
            <ul className="nav__list">
              {NAV__LINKS.map((item, index) => (
                <li className="nav__item" key={item.id}>
                  <NavLink
                    to={item.url}
                    style={{display:"flex",alignItems:"center"}}
                    className={(navClass) =>
                      navClass.isActive ? "active" : " "
                    }
                  >
                    <img
                      style={{ marginRight: "14px" }}
                      src={item.icon}
                      alt=""
                    />
                    {item.display} 
                  </NavLink>
                </li>
              ))}
              <li className="nav__item">
                <div style={{ display: "flex" }}>
                  <div className="notification">
                    <img style={{ marginRight: "14px" }} src={info} alt="" />
                    <img className="count" src={count} alt="" />
                  </div>

                  <a style={{ marginTop: "2px" }} href="">
                    お知らせ
                  </a>
                </div>
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setOpen((pre) => !pre);
                }}
                className="Menu "
              >
                <div className="menucontain">
                  <img src={open ? iconclose : Menu} alt="" />
                  {open && (
                    <div className="headNav">
                      <div className="headNavitem">
                        <div className="nav__item">
                          <NavLink
                            to="/record"
                            className={(navClass) =>
                              navClass.isActive ? "active" : " "
                            }
                          >
                            自分の記録
                          </NavLink>
                        </div>
                      </div>
                      <div className="headNavitem">
                      <div className="nav__item">
                          <NavLink
                            to="/recommend"
                            className={(navClass) =>
                              navClass.isActive ? "active" : " "
                            }
                          >
                          チャレンジ
                          </NavLink>
                        </div>
                      </div>
                     
                      {navModal.map((item, index) => (
                        <div key={index} className="headNavitem">
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
