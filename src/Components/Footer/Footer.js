import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-footer py-5">
        <div className="left">
          <h5 className="text-dark fw-bold mb-1">Car Mechanic Center</h5>
          <p>
            <small className="text-muted">Come & get you service</small>
          </p>
        </div>
        <div className="mid">
          <p>Phone : 09785654421</p>
          <p>Email : carmechanic@gmail.com</p>
          <p>Address : Uttara 10, Dhaka, Bangladesh</p>
        </div>
        <div className="right">
          <Link to="/about" className="footer-menu-item">
            About Us
          </Link>
          <Link to="/contact" className="footer-menu-item">
            Contact Us
          </Link>
          <Link to="/termService" className="footer-menu-item">
            Terms and Service
          </Link>
          <Link to="/privacyPolicy" className="footer-menu-item">
            Privacy and Policy
          </Link>
        </div>
      </div>
      <div className="foot bg-dark py-3">
        <small className="text-light">
          All right reserved 2021 || Sumaiya Alomgir
        </small>
      </div>
    </div>
  );
};

export default Footer;
