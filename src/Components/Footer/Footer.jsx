import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const FooterData = [
 "会員登録","運営会社","利用規約","個人情報の取扱について","特定商取引法に基づく表記",
 "お問い合わせ"
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footercontain">
      {FooterData.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
      </div>
    </footer>
  );
};

export default Footer;
