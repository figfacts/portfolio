import React from "react";
import "../../App.css";

function Footer() {
  return (
    <footer className="footer">
        <a href="mailto:figueroada@vcu.edu" className="footer__link">figueroada@vcu.edu</a>
        <ul className="social-list">
            <li className="social-list__item">
                <a className="social-list__link" href="https://www.linkedin.com/in/davidfig/">
                <i className="fab fa-linkedin"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://github.com/figfacts">
                <i className="fab fa-github"></i>
                </a>
            </li>
        </ul>
    </footer>
  );
}

export default Footer;