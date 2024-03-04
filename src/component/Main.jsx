import React from "react";
import "./main.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
function Main() {
  return (
    <div className="main">
      <div className="nav">
        <div className="logo">
          <h1>Material Design</h1>
        </div>
        <div className="pages">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="icons">
          <ul>

          <li><FaInstagram /></li>
          <li><FaFacebook /></li>
          <li><FaTwitter /></li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <h1>Material Design</h1>
        <p>The time is now for it be okay to be great. People in this world shun people for being nice.</p>
        <div className="button">
          <button>GET STARTED</button>
          <button className="btn-2">READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
