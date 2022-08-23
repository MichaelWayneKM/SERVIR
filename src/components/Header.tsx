import React from "react";
import "../styles/components/Header.css";

function Header() {
  return (
    <div className="main-header">
      <div className="header-title">
        <div>SERVIR</div>
        <div>
          <div>Eastern and Southern</div>
          <span>AFRICA</span>
        </div>
      </div>

      <nav>
        <div className="navitem">Home</div>
        <div className="navitem">ABOUT SERVIR</div>
        <div className="navitem">NEWS & EVENTS</div>
        <div className="navitem">SERVICE AREAS</div>
        <div className="navitem">GRANTS</div>
        <div className="navitem">OPEN DAY</div>
        <div className="navitem">MEDIA</div>
        <div className="navitem">CONTACT US</div>
      </nav>
    </div>
  );
}

export default Header;
