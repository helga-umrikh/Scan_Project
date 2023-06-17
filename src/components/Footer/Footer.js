import React from "react";
import logoFooter from "./../../images/logo__footer.svg";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-footer">
          <img src={logoFooter} alt="logo" />
        </div>
        <div className="footer__info">
          <p>г. Москва, Цветной б-р, 40 +7 495 771 21 11 info@skan.ru</p>
          <p>Copyright. 2022</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
