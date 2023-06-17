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
          <p className="footer__info-text contacts">г. Москва, Цветной б-р, 40 <br/> +7 495 771 21 11 <br/> info@skan.ru</p>
          <p className="footer__info-text copyright">Copyright. 2022</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
