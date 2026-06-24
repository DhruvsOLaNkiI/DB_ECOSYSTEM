import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <div className="site-footer-logo">
            Digital<span className="logo-accent">Broker</span>.
          </div>
          <p>
            One Ecosystem. Three Powerful Solutions. Built for the future of
            real estate.
          </p>
        </div>
        <div className="site-footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/#about">About Us</Link>
          <Link to="/#products">Products</Link>
        </div>
        <div className="site-footer-col">
          <h4>Products</h4>
          <Link to="/expo">DB Expo</Link>
          <Link to="/assets">DB Assets</Link>
          <Link to="/liquid">DB Liquid</Link>
        </div>
        <div className="site-footer-col">
          <h4>Follow Us</h4>
          <div className="site-footer-social">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="Instagram">◎</a>
          </div>
        </div>
      </div>
      <div className="site-footer-bottom">
        <span>© 2026 DigitalBroker. All rights reserved.</span>
      </div>
    </footer>
  );
}
