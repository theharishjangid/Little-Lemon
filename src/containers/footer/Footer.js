import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import Logo from "../../assets/Logo.svg";
import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaSquareInstagram,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="app__footer">
      <img src={Logo} alt="Logo" />
      <div class="app__footer__desc">
        <div class="app__footer-container no_disply_mobile">
          {["home", "about", "specials", "testimonials"].map((item) => (
            <li key={`link-${item}`} className="app__flex p-text">
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
          <li className="app__flex p-text">
            <div />
            <Link to="/reservations">reservations</Link>
          </li>
        </div>
        <div class="app__footer-container">
          <h4>Contact</h4>
          <p>
            1234 Elm Street
            <br />
            Chicago, IL 60601
            <br />
            United States.
            <br />
            (555) 123-4567
          </p>
          <p>info@littlelemons.com</p>
        </div>
        <div class="app__footer-container">
          <h4>Social Media</h4>
          <div class="app__footer-container-icons">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaSquareXTwitter className="social-icons" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="social-icons" />
            </a>
          </div>
          <div class="app__footer-container-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaSquareFacebook className="social-icons" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <FaSquareInstagram className="social-icons" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
